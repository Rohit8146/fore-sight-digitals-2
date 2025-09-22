import React, { useEffect } from "react";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import data from "./data.js";
import HoverCard from "./HoverCard.jsx";
import "./whyforesight.css";
import Images from "./Images";
import { whyForesightAnination } from "../../utils/animations.js";

function WhyForesight() {
  useEffect(() => {
    const headings = document.querySelectorAll(".hoverd_heading");
    headings.forEach((heading, index) => {
      heading.addEventListener("mouseover", () => {
        console.log("skhvksdhfk");
        whyForesightAnination(index);
      });
    });
  }, []);

  return (
    <section className="why-foresight_section">
      <div className="why-foresight max-2xl:py-25 py-40 max-md:py-10 ">
        <div className="container">
          <div className="heading_btn flex justify-between align-middle items-center max-2xl:pb-25 pb-40 max-sm:pb-5 ">
            <Heading title="Why Foresight" />
            <Button link="#" label="Get in Touch" />
          </div>
          <div className="hover-card-wrapper">
            {data.map((item, index) => {
              return <HoverCard key={index} item={item} />;
            })}
            <div className="flex flex-col overflow-hidden hover_card image_hover_card">
              {data.map((item, index) => {
                return <Images key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyForesight;
