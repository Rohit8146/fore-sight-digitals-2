import React from "react";

function TestimonialsCard({ item }) {
  return (
    <div className="gradiant_border">
      <div className="testimonials-card">
        <h3>{item.name}</h3>
        <p className="py-8 max-sm:py-2">{item.review}</p>
        <div className="user-detail flex justify-between align-middle items-center">
          <div className="user-name-image flex justify-start align-middle items-center gap-4">
            <img
              width="50px"
              height="50px"
              src={item.userImage}
              alt="user-image"
            />
            <h6>{item.userName}</h6>
          </div>
          <h4>{item.position}</h4>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
