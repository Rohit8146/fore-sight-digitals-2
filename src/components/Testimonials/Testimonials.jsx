import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import data from "./data.js";
import Heading from "../../ui/Heading.jsx";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  return (
    <section>
      <div className="testimonials pt-20 max-md:pt-3">
        <div className="container">
          <Heading title="What our clients say" />
        </div>
        <div className="testimonails_wrapper p-15 max-sm:p-7">
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={2.5}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="testimonials_wrapper flex justify-between align-middle gap-10 py-15"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialsCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
