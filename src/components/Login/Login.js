import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="from-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className="form-submit" type="submit" value="Login" required />
        </form>
        <p>
          New to Ema-john?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div>
          <button className="google-btn">
            <span className="color">Continue</span>{" "}
            <span className="color1">with</span>{" "}
            <span className="color2">Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
