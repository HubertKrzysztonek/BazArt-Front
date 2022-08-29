import { Routes, Route } from "react-router-dom";
import HomePage from "../../Features/Home/homePage";
import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default App;
