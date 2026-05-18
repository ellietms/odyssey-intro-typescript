import type { JSX } from "react";
import type { Listing } from "../gql/generated";

export const ListingDetail = (data: Listing): JSX.Element => {
  return (
    <div>
      <h2> Title: {data.title} </h2>
      <p> Number of beds: {data.numOfBeds} </p>
      <p> Cost per night: {data.costPerNight} </p>
      {data?.amenities.map((eachData) => (
        <p>
          {" "}
          {eachData.name} - {eachData.category}{" "}
        </p>
      ))}
    </div>
  );
};
