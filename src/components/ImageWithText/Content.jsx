import React from "react";
import Button from "./../../ui/Button";

function Content({ item, index }) {
  return (
    <div className="content_box gradiant_border w-[100%]">
      <div
        className={`${
          index % 2 === 0
            ? "flex-row max-md:flex-col"
            : "flex-row-reverse max-md:flex-col"
        } content_inner_box flex justify-between items-center w-full`}
      >
        <div className="image_wrapper w-[40%] max-md:w-[100%]">
          <img
            src={item.image}
            alt="box_image"
            className="object-cover max-md:w-full max-md:h-[300px] object-top"
          />
        </div>
        <div className="content_side w-[60%] px-30 max-2xl:px-10 max-md:w-[100%]">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Button link="/contact" label="Get in Touch" />
        </div>
      </div>
    </div>
  );
}

export default Content;
