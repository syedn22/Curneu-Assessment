import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar(props) {
  return (
    <nav className="container">
      {/* <p>Calculator</p> */}
      <ul className="list">
        <li className="list-item">
          <Link to="/">Standard</Link>
        </li>
        <li className="list-item">
          <Link to="/scientific">Scientific</Link>
        </li>
        <li className="list-item">
          <Link to="/date">Date</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
