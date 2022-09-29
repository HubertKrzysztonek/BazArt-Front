import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../../Features/Home/homePage";
import { useEffect, useState } from "react";
import "./App.css";
import ArtistSite from "../../Features/ArtistSite/artistSite";
import EventPage from "../../Features/EventSite/eventPage";
import NavigationMain from "../../Features/navigation-main/navigation.main.component";

import Register from "../../Features/RegistrationForm/Register";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5120/api/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  const location = useLocation();
  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<NavigationMain />}>
          <Route index element={<HomePage categories={categories} />} />
        </Route>
        <Route path="/event/:eventId" element={<EventPage />}></Route>
        <Route path="/user/:userId" element={<ArtistSite />}></Route>

        <Route path="/login" element={<Register />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
