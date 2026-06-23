import "./Topbar.css";
import { FaBell, FaSearch, FaPlus  } from "react-icons/fa";

function Topbar() {
    return (
        <div className="topbar">

            <div className="search-box">
                <FaSearch />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="topbar-right">
               <button className="create-post-btn">
          <FaPlus />
          <span>Create Post</span>
        </button>

        <button className="notification-btn">
          <FaBell />
          <span className="notification-badge">
            3
          </span>
        </button>

        <div className="profile-section">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
          />

          <span>Pritam</span>

          <span className="dropdown-arrow">
            ▼
          </span>
        </div>

          </div>
        </div>
    );
}            

export default Topbar;