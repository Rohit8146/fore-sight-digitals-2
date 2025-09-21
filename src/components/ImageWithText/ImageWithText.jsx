import React from "react";
import data from "./data.js";
import "./image-with-text.css";
import Content from "./Content.jsx";

function ImageWithText() {
  return (
    <section className="image-with-text py-20 max-md:py-5">
      <div className="container flex flex-col gap-15 max-sm:gap-7">
        {data.map((item, index) => (
          <Content key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ImageWithText;
