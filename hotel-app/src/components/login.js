import React from "react";
import "./login.css";
import loginlogo from "./assets/Rectangle 2.png";

function login() {
  return (
    <div className="login-container">
      <div className="login">
        <div className="login-logo">
          <img src={loginlogo} />
        </div>
        <div className="login-inputs">
          <div className="login-section-A">
            <h1>Welcome back!</h1>
            <p>Welcome back! Please enter your details.</p>
          </div>
          <div className="login-section-B">
            <input type="text" placeholder="Email" />
          </div>
          <div className="login-section-C">
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-section-D">
            <span>
              <a href="">Forgot password?</a>
            </span>
          </div>
          <div className="login-section-E">
            <button className="login-button">Login</button>
          </div>

          <p className="login-section-F">
            Don't have an account? <a href="">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default login;
