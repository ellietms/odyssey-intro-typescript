import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, { datasource }) => {
      return datasource.ListingAPI.getFeaturedListings();
    },
  },
};
