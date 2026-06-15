import "./LoginForm.css";
import { Link } from "react-router-dom";

import {
  FaGoogle,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function LoginForm() {
  return (
    <div className="login-container">

      <h1>Welcome Back</h1>

      <p className="login-subtitle">
        Login to manage your social media accounts.
      </p>

      <div className="social-login">

        <button className="social-btn">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>

        <button className="social-btn">
          <FaGithub />
          <span>Continue with GitHub</span>
        </button>

        <button className="social-btn">
          <FaLinkedin />
          <span>Continue with LinkedIn</span>
        </button>

      </div>

      <div className="divider">
        <span>OR</span>
      </div>

      <form className="login-form">

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <div className="login-options">

          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <Link to="#">
            Forgot Password?
          </Link>

        </div>

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>

      </form>

      <div className="signup-link">
        Don't have an account?
        <Link to="/signup"> Sign Up</Link>
      </div>

    </div>
  );
}

export default LoginForm;