import React from "react";
import "./login.css";
import loginlogo from "./assets/Rectangle 2.png";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const goToForgotPassword = () => {
        navigate("/forgot");
    };

    const goToRegister = () => {
        navigate("/register");
    };

    const handleLogin = ()=> {
        navigate("/");
    };


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
              <a className="goToForgotPassword" onClick={goToForgotPassword} >Forgot password?</a>
            </span>
          </div>
          <div className="login-section-E">
            <button className="login-button" onClick={handleLogin}>Login</button>
          </div>

          <p className="login-section-F">
            Don't have an account? <a className="goToRegister" onClick={goToRegister}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
