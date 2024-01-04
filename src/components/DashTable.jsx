import React from "react";
import DashTableRow from "./DashTableRow";
import "../styles.css";

function DashTable() {
  const userjson = [
    {
      name: "Nicholas Patrick",
      sales: "$2540.58",
      products: 150,
      premium: 105,
      membership: "Gold",
    },
    {
      name: "Cordell Edwards",
      sales: "$1567.80",
      products: 95,
      premium: 60,
      membership: "Silver",
    },
    {
      name: "Derrick Spencer",
      sales: "$1640.26",
      products: 120,
      premium: 75,
      membership: "Silver",
    },
    {
      name: "Larissa Burton",
      sales: "$2340.58",
      products: 120,
      premium: 99,
      membership: "Gold",
    },
  ];

  return (
    <>
      <div className="dash-table">
        <div className="dash-table-title">Top Sales Representative</div>
        <div className="dash-table-rows-container">
          {userjson.map((x) => {
            return (
              <DashTableRow
                user={x.name}
                sales={x.sales}
                products={x.products}
                premium={x.premium}
                membership={x.membership}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DashTable;
