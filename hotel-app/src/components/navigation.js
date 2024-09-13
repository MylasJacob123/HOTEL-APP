import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import NavLogo from "./assets/Mandala_Royal_Resort_Logo_Minimalist__5_-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Navigate() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="logo">
          <img className="nav-Logo" src={NavLogo} alt="Logo" />
        </div>
        <ul className="nav-items">
          <li className="nav-list">
            <NavLink to="/" exact activeClassName="active">
              <span className="nav-list-routes">Home</span>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/rooms" activeClassName="active">
              <span className="nav-list-routes">Rooms</span>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/facilities" activeClassName="active">
              <span className="nav-list-routes">Facilities</span>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/about" activeClassName="active">
              <span className="nav-list-routes">About</span>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/contact" activeClassName="active">
              <span className="nav-list-routes">Contact</span>
            </NavLink>
          </li>
        </ul>
        <div className="profile">
          <ul className="profile-nav-items">
            <FontAwesomeIcon className="profile-icon" icon={faUserCircle} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigate;
