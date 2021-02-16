import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs(props) {
  return (
<ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "About" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/Discover" ? "nav-link active" : "nav-link"}
        >
          Discover
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={location.pathname === "/Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
