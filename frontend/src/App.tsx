import { useQuery } from "@apollo/client";
import { Listing } from "./components/Listing";
import { GET_Featured_LISTING } from "./gql/getListing.gql";
import type { GetFeaturedQuery } from "./gql/generated";

export const App = () => {
  const { data, loading, error } =
    useQuery<GetFeaturedQuery>(GET_Featured_LISTING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div>
      <Listing featuredListings={data?.featuredListings || []} />
    </div>
  );
};
