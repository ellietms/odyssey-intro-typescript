import type { JSX } from "react";

interface Amenity {
  id?: string  
  name?: string;
  category?: string;
}

interface Listing {
  id: string;
  title: string;
  numOfBeds?: number;
  costPerNight?: number;
  closedForBookings?: boolean;
  amenities?: Amenity[];
}

interface ListingProps {
  featuredListings: Listing[];
}

export const Listing = ({ featuredListings }: ListingProps): JSX.Element => {
  return (
    <div className="listings">
      {featuredListings.map((eachData, idx) => (
        <div
          key={eachData.id ?? idx}
          className="listing-card"
          style={{
            border: "1px solid #ddd",
            padding: 12,
            marginBottom: 12,
            width: "18rem",
          }}
        >
          <h3>{eachData.title}</h3>
          <div>Beds: {eachData.numOfBeds ?? "N/A"}</div>
          <div>Price: {eachData.costPerNight ?? "N/A"}</div>
          <div>
            Amenities:{" "}
            {(eachData?.amenities || []).map((a: Amenity) => a.name).join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
};
