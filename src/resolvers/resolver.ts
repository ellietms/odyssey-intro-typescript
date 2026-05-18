import { DataSourceContext } from "../context";
import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, { dataSources }) => {
      return dataSources.listingAPI.getFeaturedListings();
    },

    getListing: (_, { id }, { dataSources}) => {
      return dataSources.listingAPI.getListing(id);
    },
  },
};
