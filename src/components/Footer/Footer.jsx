import React, { useEffect } from "react";
import footerLogo from "../../../public/footer_logo.png";
import FooterLink from "./FooterLink";
import LargeFooterLogo from "../../../public/large_logo.png";
import SocialIcons from "./SocialIcons";
import "./footer.css";
import { footerData } from "./data.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    const footer = document.querySelector(".footer-logo-wrapper");
    const images = footer?.querySelectorAll("img");
    if (!footer || !images?.length) return;

    images.forEach((image, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            id: `footer-logo-${index}`,
            trigger: footer,
            start: "top bottom",
            end: "top 70%",
            scrub: 2,
          },
        })
        .to(image, {
          y: -index * 18,
          ease: "linear",
        });
    });
  }, []);

  return (
    <footer className="footer pt-20 pb-8 max-sm:pt-12">
      <div className="container">
        <img
          src={footerLogo}
          alt="Footer Logo"
          className="footer-logo footer__logo mx-auto"
        />
        <ul className="footer-links flex  gap-30 justify-center align-center pt-15 pb-10 max-2xl:gap-12 max-2xl:pt-5 max-2xl max-sm:flex-col max-sm:gap-5 max-sm:items-center">
          {footerData.map((item, index) => (
            <FooterLink key={index} item={item} />
          ))}
        </ul>
        {/* <SocialIcons /> */}
        <div className="footer-logo-wrapper relative pt-0 pb-2 max-2xl:pb-15 max-sm:pb-0">
          <img
            src={LargeFooterLogo}
            alt="Footer Logo"
            className="footer-logo relative z-5"
          />
          <img
            src={LargeFooterLogo}
            alt="Footer Logo"
            className="footer-logo absolute top-[-15px] z-4"
          />
          <img
            src={LargeFooterLogo}
            alt="Footer Logo"
            className="footer-logo absolute top-[-30px] z-3"
          />
          <img
            src={LargeFooterLogo}
            alt="Footer Logo"
            className="footer-logo absolute top-[-45px] z-2"
          />
          <img
            src={LargeFooterLogo}
            alt="Footer Logo"
            className="footer-logo absolute top-[-60px] z-1"
          />
        </div>

        <div className="text-center pt-10">
          <p className="text-16 text-white">
            Copyright © 2025 Foresight Digitals | Powered by Foresight Digitals
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
