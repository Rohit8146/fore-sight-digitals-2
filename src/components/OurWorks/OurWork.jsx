import React, { useEffect } from "react";
import Heading from "./../../ui/Heading";
import Button from "./../../ui/Button";
import data from "./data.js";
import OurWorkCard from "./OurWorkCard.jsx";
import { ourWorkAnimation } from "../../utils/animations.js";

function OurWork() {
  useEffect(() => {
    ourWorkAnimation();
  }, []);

  return (
    <section className="our-works py-20 max-sm:py-10">
      <div className="container">
        <div className="heading_btn flex justify-between align-middle">
          <Heading title="OUR WORK" />
          <Button link="/contact" label="Get in Touch" />
        </div>
        <div className="card_wrapper py-15 flex flex-col gap-15 justify-center items-center max-sm:py-7 max-sm:gap-5">
          {data.slice(0, 3).map((item, index) => (
            <OurWorkCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
