import React from "react";
import "../styles.css";
import QuickCardInfo from "./QuickCardInfo";

function QuickCardCollection() {
  const cardData = [
    {
      category: "Product sold",
      value: "25.1k",
      change: "+15",
    },
    {
      category: "Total Profit",
      value: "$2,435k",
      change: "-3.5",
    },
    {
      category: "Total No. of Claim",
      value: "3.5M",
      change: "+15",
    },
    {
      category: "New Customer",
      value: 43.5,
      change: "+10",
    },
  ];
  return (
    <>
      <div className="quick-card-collection-container">
        {cardData.map((x) => {
          return (
            <QuickCardInfo
              category={x.category}
              value={x.value}
              change={x.change}
            />
          );
        })}
      </div>
    </>
  );
}

export default QuickCardCollection;
