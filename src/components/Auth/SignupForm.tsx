import "./SignupForm.css";

import {
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function SignupForm() {
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>

      <p className="signup-subtitle">
        Start managing all your social platforms from one dashboard.
      </p>

      <div className="social-login">

        <button className="social-btn">
          <FaGoogle />
          <span>Sign up with Google</span>
        </button>

        <button className="social-btn">
          <FaFacebook />
          <span>Sign up with Facebook</span>
        </button>

        <button className="social-btn">
          <FaXTwitter />
          <span>Sign up with X</span>
        </button>

        <button className="social-btn">
          <FaLinkedin />
          <span>Sign up with LinkedIn</span>
        </button>

        <button className="social-btn">
          <FaGithub />
          <span>Sign up with GitHub</span>
        </button>

      </div>

      <div className="divider">
        OR
      </div>

      <form className="signup-form">

        <input
          type="text"
          placeholder="Username"
          required
        />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
        />

        <button
          type="submit"
          className="signup-btn"
        >
          Create Account
        </button>

      </form>

      <div className="login-link">
        Already have an account?
        <a href="/login"> Login</a>
      </div>
    </div>
  );
}

export default SignupForm;