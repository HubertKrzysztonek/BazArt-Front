import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "../../Features/Home/homePage";
import "./App.css";
import LoginForm from "./../../Features/Registration/loginForm";
import RegistrationForm from "./../../Features/Registration/registrationForm";
import Registration from "./../../Features/Registration/registration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Registration />}></Route>
      <Route path="/login/login" element={<LoginForm />}></Route>
      <Route path="/login/register" element={<RegistrationForm />}></Route>
    </Routes>
  );
};

export default App;
