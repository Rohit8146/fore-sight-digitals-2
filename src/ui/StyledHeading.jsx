import React from "react";
import "./style.css";

function StyledHeading({
  image,
  heading,
  headingShadow,
  isContactpage = false,
}) {
  return (
    <div className="heading_wrapper py-10">
      <div className="container">
        <h2 className="flex justify-start items-center gap-4 max-sm:gap-1 max-sm:w-fit max-sm:max-auto">
          {isContactpage ? (
            <>
              <div className="heading_image_wrapper">
                <img className="image" src={image} alt="heading_image" />
              </div>
              {heading}
            </>
          ) : (
            <>
              {heading}
              <div className="heading_image_wrapper">
                <img className="image" src={image} alt="heading_image" />
              </div>
            </>
          )}
        </h2>
      </div>
    </div>
  );
}

export default StyledHeading;
