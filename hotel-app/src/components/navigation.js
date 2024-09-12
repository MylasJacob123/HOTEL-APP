import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navigation.css";
import NavLogo from "./assets/Mandala_Royal_Resort_Logo_Minimalist__5_-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navigate() {
  return (
    <div className="navigation">
      <div class="navbar">
        <div className="logo">
          <img className="nav-Logo" src={NavLogo} alt="Logo" />
        </div>
          <ul className="nav-items">
            <li className="nav-list">
              <Link to="/"><span className="nav-list-routes">Home</span></Link>
            </li>
            <li className="nav-list">
              <Link to="/rooms"><span className="nav-list-routes">Rooms</span></Link>
            </li>
            <li className="nav-list">
              <Link to="/facilities"><span className="nav-list-routes">Facilities</span></Link>
            </li>
            <li className="nav-list">
              <Link to="/about"><span className="nav-list-routes">About</span></Link>
            </li>
            <li className="nav-list">
              <Link to="/contact"><span className="nav-list-routes">Contact</span></Link>
            </li>
          </ul>
          <div className="profile">
            <ul className="profile-nav-items">
              <FontAwesomeIcon className="profile-icon" icon={faUserCircle} />
            {/* <li className="profile-nav-list">
            <Link to="/register"><span className="nav-list-routes">Register</span></Link>
            </li>
            <li className="profile-nav-list">
              <Link to="/login"><span className="nav-list-routes">Login</span></Link>
            </li> */}
          </ul>
          </div>
      </div>
    </div>
  );
}

export default Navigate;
