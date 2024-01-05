import React from "react";
import "../styles.css";
import logo from "../images/arunlogo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const sideNavArray = [
    "DashBoard",
    "New Patient",
    "Master Data",
    "Patient Follow up",
    "Online and Physical Consulting",
  ];
  const navigate = useNavigate();
  const handleSideNavClick = (page) => {
    switch (page) {
      case "dashboard":
        navigate("/");
        break;
      case "newpatient":
        navigate("/newpatient");
        break;
      case "existingpatient":
        navigate("/existingpatient");
        break;
      case "masterdata":
        navigate("/masterdata");
        break;
      case "followup":
        navigate("/followup");
        break;
      case "consulting":
        navigate("/consulting");
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
            onClick={() => handleSideNavClick("newpatient")}
          >
            <AssignmentIcon />
            New Patient
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("existingpatient")}
          >
            <AssignmentIcon />
            Existing Patient
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("masterdata")}
          >
            <CardMembershipIcon />
            Master Data
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("followup")}
          >
            <BookmarksIcon />
            Patient Follow up
          </div>
          <div
            className="side-nav-button"
            onClick={() => handleSideNavClick("consulting")}
          >
            <MonitorHeartIcon />
            Online and Physical Consulting
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
