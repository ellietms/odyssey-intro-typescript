import { gql } from "@apollo/client";

export const GET_Featured_LISTING = gql`
  query GetAllListing {
    featuredListings {
      id
      title
      numOfBeds
      costPerNight
      closedForBookings
      amenities {
        category
        name
      }
    }
  }
`;
