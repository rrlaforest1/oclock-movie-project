import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <div>Navbar</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/releases">Dernières Sorties</NavLink>
        </li>
        <li>
          <NavLink to="/quizz">Quizz</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
