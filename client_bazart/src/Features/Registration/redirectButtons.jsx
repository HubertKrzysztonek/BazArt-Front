import "./redirectButtons.css";
import { NavLink } from "react-router-dom";
const RedirectButtons = () => {
  return (
    <>
      <NavLink
        to="/login/login"
        activeClassName="pageSwitcherItem-active"
        className="pageSwitcherItem"
      >
        Login
      </NavLink>
      <NavLink
        to="/login/register"
        activeClassName="pageSwitcherItem-active"
        className="pageSwitcherItem"
      >
        Register
      </NavLink>
    </>
  );
};

export default RedirectButtons;
