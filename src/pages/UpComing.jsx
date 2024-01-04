import React from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import emptypage from "../images/emptypage.jpg";
import "../styles.css";

function UpComing() {
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
            <div className="blank-image">
              <img src={emptypage} alt="This page will be updated shortly" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpComing;
