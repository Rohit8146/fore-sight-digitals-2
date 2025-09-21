import React from "react";

function OurServiceCards({ item, index }) {
  return (
    <div
      className="Ourwork_card relative"
      style={{ backgroundColor: item.color, zIndex: index + 1 }}
    >
      <div className="container card">
        <h3 className="card_heading">{item.heading}</h3>
        <p className="card_description">{item.description}</p>
      </div>
    </div>
  );
}

export default OurServiceCards;
