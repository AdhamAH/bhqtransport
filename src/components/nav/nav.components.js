import React from "react";

import "./nav.style.scss";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <div className="nav">
    <ul className="menu">
      <NavLink exact to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/informaite" className="nav-link" activeClassName="active">
        informatie
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="active">
        Conatct
      </NavLink>
    </ul>
  </div>
);

export default Nav;
