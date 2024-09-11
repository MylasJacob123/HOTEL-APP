import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navigation.css";

function Navigate() {
  return (
    <div className="navigation">
      <div class="navbar">
        <div className="logo"></div>
          <ul className="nav-items">
            <li className="nav-list">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list">
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="nav-list">
              <Link to="/facilities">Facilities</Link>
            </li>
            <li className="nav-list">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-list">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="profile">
            <ul className="nav-items">
            <li className="nav-list">
            <Link to="/register">Register</Link>
            </li>
            <li className="nav-list">
              <Link to="/login">Login</Link>
            </li>
          </ul>
          </div>
      </div>
    </div>
  );
}

export default Navigate;
