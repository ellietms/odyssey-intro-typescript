import { useQuery } from "@apollo/client/react";
import type { JSX } from "react";
import { useParams } from "react-router-dom";

import { GET_LISTING_DETAILS } from "../gql/getListingDetail";

type Amenity = {
  name: string;
  category: string;
};

type Listing = {
  title: string;
  numOfBeds: number;
  costPerNight: number;
  amenities: Amenity[];
};

type GetListingData = {
  getListing: Listing;
};

export const ListingDetail = (): JSX.Element => {
  const {id} = useParams()

  const { data, loading, error } = useQuery<GetListingData>(
    GET_LISTING_DETAILS,
    {
      variables: {
        id: id ?? ""
      },
    },
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2> Title: {data.getListing.title} </h2>
      <p> Number of beds: {data.getListing.numOfBeds} </p>
      <p> Cost per night: {data.getListing.costPerNight} </p>
      {data?.getListing.amenities.map((eachData) => (
        <p key={eachData.name}>
          {" "}
          {eachData.name} - {eachData.category}{" "}
        </p>
      ))}
    </div>
  );
};
