import React from "react";
import "./ourwork.css";
function OurWorkCard({ item }) {
  return (
    <a
      href={item.link}
      className="ourwork-card__outer gradiant_border card-border"
    >
      <div className="ourwork-card">
        <div className="image_wrapper">
          <img src={item.image} alt="project-image" />
        </div>
        <div className="card_imformation">
          <h3>{item.name}</h3>
          <div className="tags_wrapper pt-8 flex gap-5 justify-start align-middle max-lg:flex-wrap max-sm:pt-4 max-sm:gap-2">
            {item.tags.map((tag, index) => {
              return (
                <div key={index} className="card-tag">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </a>
  );
}

export default OurWorkCard;
