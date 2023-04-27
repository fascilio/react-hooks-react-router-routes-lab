import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavLink exact to="/" style={{ fontSize: "24px" }}>
        Home
      </NavLink>
      <NavLink exact to="/movies" style={{ fontSize: "24px" }}>
        Movies
      </NavLink>
      <NavLink exact to="/directors" style={{ fontSize: "24px" }}>
        Directors
      </NavLink>
      <NavLink exact to="/actors" style={{ fontSize: "24px" }}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;