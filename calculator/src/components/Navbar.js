import React from "react";
import "../css/Navbar.css";

function Navbar(props) {
  return (
    <nav className="container">
      {/* <p>Calculator</p> */}
      <ul className="list">
        <li className="list-item">Standard</li>
        <li className="list-item">Scientific</li>
        {/* <li className="list-item">Programmer</li> */}
        <li className="list-item">Date</li>
      </ul>
    </nav>
  );
}

export default Navbar;
