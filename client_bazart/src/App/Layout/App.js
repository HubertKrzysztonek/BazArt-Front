import { Routes, Route } from "react-router-dom";
import HomePage from "../../Features/Home/homePage";
import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5120/api/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage categories={categories} />} />
    </Routes>
  );
};
export default App;
