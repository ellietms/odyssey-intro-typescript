import { DataSourceContext } from "../context";
import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, { dataSources }: DataSourceContext) => {
      return dataSources.listingAPI.getFeaturedListings();
    },
  },
};
