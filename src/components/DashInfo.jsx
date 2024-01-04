import React from "react";
import graphimg from "../images/graph.jpg";
import infoimg from "../images/info.jpg";
import "../styles.css";
function DashInfo() {
  return (
    <>
      <div className="dash-info-container">
        <div className="dash-graph">
          <img src={graphimg} alt="Graph Image Here" />
        </div>
        <div className="dash-info">
          <img src={infoimg} alt="" />
        </div>
      </div>
    </>
  );
}

export default DashInfo;
