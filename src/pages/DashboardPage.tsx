import "./DashboardPage.css";
import { useState } from "react";

import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Topbar from "../components/Dashboard/Topbar/Topbar";
import ConnectedAccounts from "../components/Dashboard/Overview/ConnectedAccounts";
import OverallStats from "../components/Dashboard/Overview/OverallStats";
import RecentActivity from "../components/Dashboard/Overview/RecentActivity";

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          <h1>Overview</h1>
          <p>Welcome back, Pritam 👋</p>
          <ConnectedAccounts />
          <OverallStats />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;