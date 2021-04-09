import * as React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <nav className="nav justify-content-center p-3 shadow pt-3 shadow mb-2">
      <NavLink
        exact
        className="font-weight-light mx-5"
        activeClassName="text font-weight-bold"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="font-weight-light mx-5"
        activeClassName="text font-weight-bold"
        to="/Vulcandex"
      >
        Vulcandex
      </NavLink>
    </nav>
  );
};

interface NavBarProps {}

export default NavBar;
