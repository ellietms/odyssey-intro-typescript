import { useQuery } from "@apollo/client/react";
import type { JSX } from "react";
import { GET_Featured_LISTING } from "../gql/getListing.gql";

type Amenity = {
  id?: string | number | null;
  name?: string | null;
  category?: string | null;
};

type FeaturedListing = {
  id?: string | number | null;
  title?: string | null;
  numOfBeds?: number | null;
  costPerNight?: number | null;
  amenities?: Amenity[] | null;
};

type GetFeaturedListingQuery = {
  featuredListings?: FeaturedListing[] | null;
};

export const ListingPage = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetFeaturedListingQuery>(GET_Featured_LISTING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className="listings"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {data.featuredListings.map((eachData, idx) => (
        <div
          key={eachData.id ?? idx}
          className="listing-card"
          style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}
        >
          <h3 style={{ marginTop: 0 }}>{eachData.title}</h3>
          <div>Beds: {eachData.numOfBeds ?? "N/A"}</div>
          <div>Price: {eachData.costPerNight ?? "N/A"}</div>
          <div>
            Amenities:
            <ul style={{ margin: "6px 0 0 12px" }}>
              {eachData.amenities?.map((amenity, ai) => (
                <li key={amenity.id ?? `${eachData.id}-am-${ai}`}>
                  {`${amenity?.name ?? "Unnamed"} — ${amenity?.category ?? "N/A"}`}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: 12 }}>
            <button
              type="button"
              style={{
                padding: "6px 12px",
                background: "#0d6efd",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              more info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
