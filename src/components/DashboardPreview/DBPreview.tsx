import "./DBPreview.css";

function DashboardPreview() {
  return (
    <section className="dashboard-preview">
      <div className="preview-header">
        <h2>Everything In One Dashboard</h2>

        <p>
          Manage accounts, analyze performance, schedule content and monitor
          growth from a single workspace.
        </p>
      </div>

      <div className="dashboard-mockup">

        <div className="metric-card">
          <h3>Total Followers</h3>
          <p>124.5K</p>
        </div>

        <div className="metric-card">
          <h3>Engagement Rate</h3>
          <p>8.2%</p>
        </div>

        <div className="metric-card">
          <h3>Scheduled Posts</h3>
          <p>56</p>
        </div>

        <div className="metric-card">
          <h3>Monthly Reach</h3>
          <p>1.4M</p>
        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;