import "./Sidebar.css";

import {
  FaHome,
  FaCalendarAlt,
  FaChartLine,
  FaUsers,
  FaCog,
  FaBars,
  FaTimes,
  FaRegEdit,
  FaComments,
} from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2>{isOpen ? "SocialDash" : "SD"}</h2>
        </div>

<nav className="sidebar-nav">

  <a href="#">
    <FaHome />
    {isOpen && <span>Overview</span>}
  </a>

  <a href="#">
    <FaCalendarAlt />
    {isOpen && <span>Calendar</span>}
  </a>

  <a href="#">
    <FaRegEdit />
    {isOpen && <span>Posts</span>}
  </a>

  <a href="#">
    <FaChartLine />
    {isOpen && <span>Analytics</span>}
  </a>

  <a href="#">
    <FaComments />
    {isOpen && <span>Messages</span>}
  </a>

  <a href="#">
    <FaUsers />
    {isOpen && <span>Team</span>}
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