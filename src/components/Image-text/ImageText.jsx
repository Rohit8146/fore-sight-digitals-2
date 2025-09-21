import React, { useEffect } from "react";
import "./image-text.css";
import Button from "./../../ui/Button";
import siteImage from "../../assets/images/mobile-site-instantly.png";
import { imageTextAnimation } from "../../utils/animations.js";

function ImageText() {
  useEffect(() => {
    imageTextAnimation();
  }, []);

  return (
    <section>
      <div className="image-with-text">
        <div className="container">
          <div className="bg-container">
            <div className="image_wrapper_section">
              <img src={siteImage} alt="image" />
            </div>
            <div className="content flex flex-col gap-15 align-middle justify-center max-sm:gap-3">
              <h2>Your site instantly responsive</h2>
              <Button link="#" label="Lets’s Connect" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
