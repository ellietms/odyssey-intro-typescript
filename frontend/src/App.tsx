import { Routes, Route } from "react-router-dom";
import { ListingPage } from "./components/ListingPage";
import { ListingDetail } from "./components/ListingDetail";
import { CreateList } from "./components/CreateList";
import { ThemeProvider } from "./contexts/ThemeContext";

export const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/createList" element={<CreateList />} />
      </Routes>
    </ThemeProvider>
  );
};
