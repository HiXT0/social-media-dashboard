import "./SignupForm.css";
import { Link } from "react-router-dom";

import {
  FaGoogle,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";


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
          <FaLinkedin />
          <span>Sign up with LinkedIn</span>
        </button>

        <button className="social-btn">
          <FaGithub />
          <span>Sign up with GitHub</span>
        </button>

      </div>

      <div className="divider">
        <span>OR</span>
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
        <label className="terms">
          <input
            type="checkbox"
            required
          />
          I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </label>

        <button
          type="submit"
          className="signup-btn"
        >
          Create Account
        </button>

      </form>

      <div className="login-link">
        Already have an account?
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
}

export default SignupForm;