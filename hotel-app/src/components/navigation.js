import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigate.css";

function Navigate() {
  
  return (
    <div className="navigation">
      <nav className="navbar">
        <ul className="nav-items">
          
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            
        </ul>
      </nav>
    </div>
  );
}

export default Navigate;