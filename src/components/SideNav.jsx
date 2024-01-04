import React from "react";
import "../styles.css";
import logo from "../images/arunlogo.png";
import rocket from "../images/rocket.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const sideNavArray = [
    "DashBoard",
    "Claims",
    "Biller Queue",
    "Subscription",
    "Health",
  ];
  const navigate = useNavigate();
  const handleSideNavClick = (page) => {
    switch (page) {
      case "dashboard":
        navigate("/");
        break;
      case "claims":
        navigate("/claims");
        break;
      case "subscription":
        navigate("/subscription");
        break;
      case "billerqueue":
        navigate("/billerqueue");
        break;
      case "health":
        navigate("/health");
        break;
    }
  };
  return (
    <>
      <div className="side-nav-container">
        <div className="side-nav-logo">
          <img src={logo} alt="Logo" />
          <hr class="side-nav-divider"></hr>
        </div>

        <div className="side-nav-links">
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("dashboard")}
          >
            <DashboardIcon /> DashBoard
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("claims")}
          >
            <AssignmentIcon />
            Claims
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("billerqueue")}
          >
            <CardMembershipIcon />
            Biller Queue
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("subscription")}
          >
            <BookmarksIcon />
            Subscription
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("health")}
          >
            <MonitorHeartIcon />
            Health
          </div>
        </div>
        {/* <div className="side-nav-card">
          <div className="side-nav-upgrade-card">
            <img src={rocket} alt="Rocket Image" />
            <button>Upgrade Now</button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default SideNav;
