import gql from "graphql-tag";

export const CREATE_NEW_LIST = gql`
  mutation createNewList($newListing: CreateListingInput) {
    createListing(newList: $newListing) {
      code
      closedForBookings
      costPerNight
      id
      numOfBeds
      title
      listing {
        amenities {
          category
          id
          name
        }
      }
    }
  }
`;
