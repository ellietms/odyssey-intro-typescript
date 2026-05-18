import { Routes, Route } from "react-router-dom";
import { ListingPage } from "./components/ListingPage";
import { ListingDetail } from "./components/ListingDetail";

export const App = () => (
  <Routes>
    <Route path="/" element={<ListingPage />} />
    <Route path="/listing/:id" element={<ListingDetail />} />
  </Routes>
);
