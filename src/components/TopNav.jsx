import React from "react";
import "../styles.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

function TopNav() {
  return (
    <>
      <div className="top-nav-container">
        <div className="top-nav-title">Overview</div>
        <div className="top-nav-action">
          <div className="search-bar">
            <input type="text" />
            <button>
              <SearchIcon
                sx={{ color: "rgb(82, 66, 188)", fontSize: "1.5rem" }}
              />
            </button>
          </div>
          <div className="notification">
            <NotificationsIcon
              sx={{ color: "rgb(82, 66, 188)", fontSize: "1.5rem" }}
            />
          </div>
          <div className="account">
            <AccountCircleIcon
              sx={{ color: "rgb(82, 66, 188)", fontSize: "1.5rem" }}
            />
            TestUser
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
