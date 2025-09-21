import React from "react";
import StyledHeading from "./../ui/StyledHeading";
import image from "../assets/images/heading_service.png";
import ImageWithText from "../components/ImageWithText/ImageWithText";

function Service() {
  return (
    <main className="service-page py-40 max-2xl:pb-0 max-md:py-15">
      <section className="container max-auto">
        <StyledHeading heading="OUR" image={image} />
      </section>
      <ImageWithText />
    </main>
  );
}

export default Service;
