import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <h2>Social Media Dashboard</h2>

        <p>
          Manage, analyze and grow your social media presence
          from one powerful platform.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Product</h3>
          <a href="#">Features</a>
          <a href="#">Analytics</a>
          <a href="#">Scheduling</a>
        </div>

        <div>
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
        </div>

        <div>
          <h3>Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Social Media Dashboard. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;          