import type { JSX } from "react";

interface Amenity {
  id?: string;
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
    <div
      className="listings"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
      }}
    >
      {featuredListings.map((eachData, idx) => (
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
