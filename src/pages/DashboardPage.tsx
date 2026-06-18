import "./DashboardPage.css";

import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

function DashboardPage() {
  return (
    <div className="dashboard-page">

      <Sidebar />

      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome back, Pritam 👋</p>
      </div>

    </div>
  );
}

export default DashboardPage;