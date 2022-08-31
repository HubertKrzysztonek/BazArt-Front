import { Routes, Route } from "react-router-dom";
import EventPage from "../../Features/EventSite/eventPage";
import HomePage from "../../Features/Home/homePage";
import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/event/:eventId" element={<EventPage />}></Route>
    </Routes>
  );
};

export default App;
