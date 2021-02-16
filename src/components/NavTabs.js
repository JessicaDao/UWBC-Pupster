import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#discover" onClick={() => props.handlePageChange("Discover")} className="nav-link">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href="#Search" onClick={() => props.handlePageChange("Search")} className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
