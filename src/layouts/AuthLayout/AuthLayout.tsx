import type { ReactNode } from "react";
import "./AuthLayout.css";

interface AuthLayoutProps {
    children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="auth-layout">
            {children}
        </div>
    );
}

export default AuthLayout;