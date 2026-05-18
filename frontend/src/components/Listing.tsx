import type { JSX } from "react";
import Card from "react-bootstrap/Card";

interface Amenity {
  name?: string;
  category?: string;
}

interface Listing {
  id: string;
  title: string;
  numOfBeds?: number;
  costPerNight?: number;
  closedForBookings?: boolean;
  amenities: Amenity[];
}

interface ListingProps {
  data: {
    featuredListings: Listing[];
  };
}

export const ç = ({ data }: ListingProps): JSX.Element => {
  return (
    <>
      {data.featuredListings.map((eachData: any, idx: number) => {
        return (
          <Card key={idx} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{eachData.title}</Card.Title>
              <Card.Text>{eachData.numOfBeds}</Card.Text>
              <Card.Text>{eachData.costPerNight}</Card.Text>
              <Card.Text>
                name:{" "}
                {(eachData.amenities || [])
                  .map((eachService: any) => eachService.name)
                  .join(", ")}
                category:{" "}
                {(eachData.amenities || [])
                  .map((eachService: any) => eachService.category)
                  .join(", ")}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
