// TODO

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { resolvers } from "./resolvers/resolver";
import { ListingAPI } from "./datasources/listing-api";

// This converts GraphQL strings into the format that Apollo libraries expect
//  when working with operations and schemas, and it also enables syntax highlighting.

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  }),
);

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    // server config
    context: async() => {
      return {
        datasource :{
          ListingAPI : new ListingAPI()
        }
      }
    },
  });

  

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
