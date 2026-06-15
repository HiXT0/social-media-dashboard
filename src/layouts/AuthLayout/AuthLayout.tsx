import type { ReactNode } from "react";
import "./AuthLayout.css";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-layout">

      <div className="auth-left">

        <h1>Social Media Dashboard</h1>

        <p>
          Manage, schedule and analyze all your social media
          platforms from one place.
        </p>

        <div className="benefits">

          <div>✓ Multi Platform Management</div>

          <div>✓ Advanced Analytics</div>

          <div>✓ Smart Scheduling</div>

          <div>✓ AI Content Assistant</div>

          <div>✓ Team Collaboration</div>

        </div>

      </div>

      <div className="auth-right">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;