import { useState } from "react";
import "./Sidebar.css";

import {
  FaHome,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>{isOpen ? "SocialDash" : "SD"}</h2>
        </div>

        <nav className="sidebar-nav">
          <a href="#">
            <FaHome />
            {isOpen && <span>Home</span>}
          </a>

          <a href="#">
            <FaCalendarAlt />
            {isOpen && <span>Calendar</span>}
          </a>

          <a href="#">
            <FaChartLine />
            {isOpen && <span>Analytics</span>}
          </a>

          <a href="#">
            <FaUsers />
            {isOpen && <span>Users</span>}
          </a>

          <a href="#">
            <FaCog />
            {isOpen && <span>Settings</span>}
          </a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;