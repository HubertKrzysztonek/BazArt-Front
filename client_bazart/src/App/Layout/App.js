import { Routes, Route } from "react-router-dom";
import HomePage from "../../Features/Home/homePage";
import { useEffect, useState } from "react";
import "./App.css";
import ArtistSite from "../../Features/ArtistSite/artistSite";
import EventPage from "../../Features/EventSite/eventPage";
import NavigationMain from "../../Features/navigation-main/navigation.main.component";

const App = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5120/api/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationMain />}>
        <Route index element={<HomePage categories={categories} />} />
      </Route>
        <Route path="/event/:eventId" element={<EventPage />}></Route>
      <Route path="/artistSite" element={<ArtistSite />}></Route>
    </Routes>
  );
};

export default App;
