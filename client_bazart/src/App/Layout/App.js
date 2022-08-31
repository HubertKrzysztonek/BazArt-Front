import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './../../Features/Home/homePage';
import ArtistSite from "../../Features/ArtistSite/artistSite";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/artistSite' element={<ArtistSite />}></Route>
    </Routes>
  );
};

export default App;
