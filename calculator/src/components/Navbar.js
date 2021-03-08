import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar(props) {
  return (
    <nav className="container">
      <ul>
        <li className="heading">Calculator</li>
        <li>
          <Link to="/">Standard</Link>
        </li>
        <li>
          <Link to="/scientific">Scientific</Link>
        </li>
        <li>
          <Link to="/date">Date</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
