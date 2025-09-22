import React from "react";
import { socialData } from "./data.js";

function SocialIcons() {
  return (
    <div className="social-icons items-center pt-10 pb-20 max-sm:pb-25 max-2xl:pt-0">
      <div className=" flex gap-10 bg-white w-fit py-3 px-6 mx-auto rounded-xl justify-center align-center mb-10 max-sm:gap-8 max-sm:mb-10">
        {socialData.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt="Instagram"
                className="w-8 h-8 hover:opacity-70 transition"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialIcons;
