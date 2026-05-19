import gql from "graphql-tag";

export const CREATE_NEW_LIST = gql`
  mutation createNewList($newListing: CreateListingInput) {
    createListing(newListing: $newListing) {
      code
      success
      message
      listing {
        title
        description
        numOfBeds
        costPerNight
        closedForBookings
        amenities {
          category
          id
          name
        }
      }
    }
  }
`;
