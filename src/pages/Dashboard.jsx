import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import "../styles.css";
import ReactDOM from "react-dom/client";
import DashTable from "../components/DashTable";
import QuickCardCollection from "../components/QuickCardCollection";
import DashInfo from "../components/DashInfo";

function Dashboard() {
  return (
    <>
      <div className="homepage-main-container">
        <div className="side-nav">
          <SideNav />
        </div>
        <div className="content-container">
          <div className="top-nav">
            <TopNav />
          </div>
          <div className="content">
            <DashTable />
            <QuickCardCollection />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
