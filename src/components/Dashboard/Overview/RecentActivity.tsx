import "./RecentActivity.css";

function RecentActivity() {
  const activities = [
    {
      platform: "Instagram",
      action: "New post published",
      time: "2 hours ago",
    },
    {
      platform: "LinkedIn",
      action: "Scheduled post for tomorrow",
      time: "5 hours ago",
    },
    {
      platform: "X",
      action: "Reached 10K impressions",
      time: "Yesterday",
    },
    {
      platform: "Instagram",
      action: "Gained 120 followers",
      time: "Yesterday",
    },
  ];

  return (
    <section className="recent-activity">
      <h2>Recent Activity</h2>

      <div className="activity-list">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="activity-item"
          >
            <div className="activity-dot"></div>

            <div className="activity-content">
              <h4>{activity.platform}</h4>

              <p>{activity.action}</p>

              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentActivity;