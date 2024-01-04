import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import "../styles.css";

function DashTableRow({ user, sales, products, premium, membership }) {
  const handleMembershipClass = (membership) => {
    switch (membership) {
      case "Gold":
        return "golden-font";
      case "Silver":
        return "green-font";
    }
  };

  return (
    <>
      <div className="row-container">
        <div className="row-user">
          <div className="row-avatar">
            <AccountCircleIcon />
          </div>
          <div className="row-user-name">{user}</div>
        </div>
        <div className="row-sales">{sales}</div>
        <div className="row-products">{products}</div>
        <div className="row-premium">{premium}</div>
        <div className={handleMembershipClass(membership)}>{membership}</div>
        <div className="row-options">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default DashTableRow;
