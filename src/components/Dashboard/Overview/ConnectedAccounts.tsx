import "./ConnectedAccounts.css";

import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";   

function ConnectedAccounts() {
  const accounts = [
    {
      name: "Instagram",
      username: "@pritam.tech",
      connected: true,
      icon: <FaInstagram />,
    },
    {
      name: "LinkedIn",
      username: "pritam-bhakta",
      connected: true,
      icon: <FaLinkedin />,
    },
    {
      name: "X",
      username: "@pritam_dev",
      connected: true,
      icon: <FaXTwitter />,
    },
  ];

  return (
    <section className="connected-accounts">
      <div className="section-header">
        <h2>Connected Accounts</h2>

        <button className="add-account-btn">
          + Add Account
        </button>
      </div>

      <div className="accounts-grid">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="account-card"
          >
            <div className="account-icon">
              {account.icon}
            </div>

            <h3>{account.name}</h3>

            <p>{account.username}</p>

            <span
              className={
                account.connected
                  ? "status connected"
                  : "status disconnected"
              }
            >
              {account.connected
                ? "Connected"
                : "Not Connected"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConnectedAccounts;