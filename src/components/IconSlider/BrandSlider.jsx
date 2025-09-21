import images from "./data.js";
// import { sliderAnimation } from "../../utils/animations.js";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

function BrandSlider() {
  

  return (
    <div className="brand_slider overflow-hidden w-full py-15 max-md:py-6">
      <h3 className="text-white text-5xl font-bold text-center pb-10 font-(family-name:--main-font) tracking-wide max-md:text-4xl max-md:pb-1 max-sm:text-3xl">
        Trusted By
      </h3>
      <Marquee direction="left" autoFill speed={100} loop={0} className="logo_slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="slider_image flex px-10 flex-row flex-nowrap justify-center"
          >
            <img
              src={image}
              alt={`brand-${index}`}
              className="w-[170px] h-[100%] object-contain max-sm:w-[100px]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default BrandSlider;
