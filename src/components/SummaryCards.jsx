// SummaryCards.js
import React from "react";

const SummaryCards = () => {
  const cards = [
    { title: "All Orders", count: 0 },
    { title: "Pending", count: 0 },
    { title: "Completed", count: 0 },
    { title: "Cancelled", count: 0 },
    { title: "Returned", count: 0 },
    { title: "Abandoned Cart", count: 0 },
  ];

  return (
    <div className="bg-white rounded shadow-sm p-4 mb-4">
      <div className="row text-center">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <h6>{card.title}</h6>
            <p className="text-muted">{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
