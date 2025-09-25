import React from "react";
import Heading from "../../ui/Heading";
import "./bookcall.css";
import arrow from "../../assets/images/submit_arrow.png";
import Button from "../../ui/Button";

function BookCall() {
  return (
    <section>
      <div className="book-call py-20 max-sm:pb-0">
        <div className="bookcall-container">
          <Heading title="Looking for that strategic partner to elevate your product?" />
          <div className="form_field gradiant_border flex justify-center items-center w-full my-10 mx-auto">
            <div className="bg-black w-fit flex justify-between items-center input_btn px-5 book-btn">
              <Button label="Book a Call" link="/contact" />
              <div type="button">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <a href="mailto:foresightdigitals@gmail.com">
            You can also send us an email 😉 foresightdigitals@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookCall;
