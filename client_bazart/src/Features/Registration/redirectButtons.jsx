import "./redirectButtons.css";
import { NavLink } from "react-router-dom";
const RedirectButtons = () => {
  return (
    <div className="loginButtonContainer">
      <div className="loginSingleButtonContainer">
        <NavLink
          to="/login/login"
          className="pageSwitcherItem"
        >
          Login
        </NavLink>
      </div>
      <div className="loginSingleButtonContainer">
        <NavLink
          to="/login/register"
          className="pageSwitcherItem"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default RedirectButtons;
