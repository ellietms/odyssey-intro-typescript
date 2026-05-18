import { Routes, Route } from "react-router-dom";
import { ListingPage } from "./components/ListingPage";
import { ListingDetail } from "./components/ListingDetail";
import { CreateList } from "./components/CreateList";

export const App = () => (
  <Routes>
    <Route path="/" element={<ListingPage />} />
    <Route path="/listing/:id" element={<ListingDetail />} />
    <Route path="/createList" element={<CreateList />} />
  </Routes>
);
