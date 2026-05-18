import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing, CreateListingInput } from "../types";

export class ListingAPI extends RESTDataSource {
  baseURL = "https://rt-airlock-services-listing.herokuapp.com/";

  getFeaturedListings(): Promise<Listing[]> {
    return this.get<Listing[]>("featured-listings");
  }

  getListing(id: string): Promise<Listing> {
    return this.get<Listing>(`listings/${id}`);
  }

  createListing(newListing:CreateListingInput): Promise<Listing> {
    return this.post<Listing>("listings", {
      body: {
        newListing
      }
    })
  }
}
