import React, { useEffect } from "react";
import StyledHeading from "../../ui/StyledHeading";
import headingImage from "../../assets/images/Edge.png";
import headingShadow from "../../assets/images/heading_shadow.png";
import OurServiceCards from "./OurServiceCards";
import "./ourservice.css";
import { ourCardsAnmimation } from "../../utils/animations.js";
import data from "./data.js";
import Button from "./../../ui/Button";

function OurService() {
  useEffect(() => {
    ourCardsAnmimation();
  }, []);

  return (
    <div className="our-works">
      <div className="inner-container">
        <div className="container Heading-btn flex justify-between items-center">
          <StyledHeading
            image={headingImage}
            heading="OUR"
            headingShadow={headingShadow}
          />
          <Button link="/service" label="Services We Offer" />
        </div>
        <div className="Ourwork-Card_wrapper">
          {data.map((item, index) => (
            <OurServiceCards key={index} item={item} index={index} />
          ))}
        </div>
        <div className="end_animation"></div>
      </div>
    </div>
  );
}

export default OurService;
