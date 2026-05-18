import { Resolvers } from "../types";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: async (_, __, { dataSources }) => {
      return await dataSources.listingAPI.getFeaturedListings();
    },

    getListing: async (_, { id }, { dataSources }) => {
      return await dataSources.listingAPI.getListing(id);
    },
  },

  Mutation: {
    createListing: async (_, { newListing }, { dataSources }) => {
      try {
        const listing = await dataSources.listingAPI.createListing(newListing);
        return {
          success: true,
          code: 200,
          message: "Listing created successfully",
          listing,
        };
      } catch (err) {
        return {
          success: false,
          code: 500,
          message: `Something went wrong: ${err}`,
        };
      }
    },
  },
};
