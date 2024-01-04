import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import GradingIcon from "@mui/icons-material/Grading";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

function QuickCardInfo({ category, value, change }) {
  let cardClass = "";
  let cardLink = "";

  const handleCardIconandLinks = () => {
    switch (category) {
      case "Product sold":
        cardLink = "View Report";
        return <ShoppingCartCheckoutIcon fontSize="large" />;
      case "Total Profit":
        cardLink = "View Report";
        return <TrendingUpIcon fontSize="large" />;
      case "Total No. of Claim":
        cardLink = "View More";
        return <GradingIcon fontSize="large" />;
      case "New Customer":
        cardLink = "View More";
        return <GroupAddIcon fontSize="large" />;
    }
  };

  const handleChangeColour = () => {};

  return (
    <>
      <div className="quick-card">
        <div className="quick-card-info">
          <div className="card-category">{category}</div>
          <div className="card-value">{value}</div>
          <div
            className="card-change"
            style={{ color: change > 0 ? "#8bef3c" : "#ff2424" }}
          >
            {change > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
            {change}%
          </div>
        </div>
        <div className="quick-card-links">
          <div className="card-icon">{handleCardIconandLinks()}</div>
          <div className="card-link">
            <a href="">{cardLink}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickCardInfo;
