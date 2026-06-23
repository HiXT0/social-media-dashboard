import "./OverallStats.css";

import {
  FaUsers,
  FaEye,
  FaHeart,
  FaPen,
} from "react-icons/fa";

function OverallStats() {
  const stats = [
    {
      title: "Total Followers",
      value: "52.4K",
      icon: <FaUsers />,
    },
    {
      title: "Total Reach",
      value: "182K",
      icon: <FaEye />,
    },
    {
      title: "Engagement Rate",
      value: "8.7%",
      icon: <FaHeart />,
    },
    {
      title: "Published Posts",
      value: "327",
      icon: <FaPen />,
    },
  ];

  return (
    <section className="overall-stats">
      <h2>Overall Performance</h2>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="stat-card"
          >
            <div className="stat-icon">
              {stat.icon}
            </div>

            <div>
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OverallStats;