import { useQuery } from "@apollo/client/react";
import { Routes, Route } from "react-router-dom";

import { ListingPage } from "./components/ListingPage";
import { GET_Featured_LISTING } from "./gql/getListing.gql";
import type { GetFeaturedQuery } from "./gql/generated";

export const App = () => {
  return (
    <div>
      <ListingPage />
    </div>
  );
};
