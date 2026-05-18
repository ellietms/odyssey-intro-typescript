import gql from "graphql-tag";

export const GET_LISTING_DETAILS = gql`
  query getListingInfo($id: ID!) {
    getListing(id: $id) {
      title
      numOfBeds
      costPerNight
      amenities {
        name
        category
      }
    }
  }
`;
