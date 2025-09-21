import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// banner video
export function bannerVideoAnimation(videoRef) {
  let video = videoRef.current;

  if (!video) return;

  video.addEventListener("loadedmetadata", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: "bottom -150%",
          scrub: 3,
        },
      })
      .to(video, { currentTime: video.duration, ease: "none" });
  });
}

// our services
export function ourCardsAnmimation() {
  let ourWorkCardWrapper = document.querySelector(".Ourwork-Card_wrapper");
  let ourWorkCards = document.querySelectorAll(
    ".Ourwork-Card_wrapper .Ourwork_card"
  );

  if (!ourWorkCardWrapper || ourWorkCards.length === 0) return;

  gsap.set(ourWorkCards, { height: "60vh" });
  gsap.set(ourWorkCardWrapper, { height: "100vh" });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ourWorkCardWrapper,
      start: "top top",
      end: "bottom -150%",
      pin: true,
      scrub: 2,
    },
    defaults: { ease: "power2.out", duration: 1 },
  });

  // example animation: reduce card height smoothl
  tl.to(ourWorkCards, { height: "33vh" }, 0);
}

// our work
export const ourWorkAnimation = () => {
  const cards = document.querySelectorAll(
    ".card_wrapper .ourwork-card__outer img"
  );
  if (!cards.length) return;

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { y: -100, scale: 0.9, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

// why foresight
export const whyForesightAnination = (index) => {
  let images = document.querySelectorAll(".hover_card img");
  if (!images.length) return;

  const naturalHeight = images[0].offsetHeight || 0;
  gsap.to(images, {
    y: -(index * naturalHeight),
    duration: 0.6,
    ease: "power1.out",
  });
};

// footer
export const footerAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener("load", () => {
    let footer = document.querySelector(".footer-logo-wrapper");
    let footerImages = document.querySelectorAll(".footer-logo-wrapper img");
    if (!footer || footerImages.length === 0) return;
    footerImages.forEach((image, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: footer,
            start: "top 100%",
            end: "top 70%",
            scrub: 2,
          },
        })
        .to(image, {
          y: -index * 18,
          ease: "linear",
        });
    });
  });
};

// image text
export const imageTextAnimation = () => {
  let container = document.querySelector(".image-with-text");
  if (!container) return;

  gsap.from(container, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: container,
      start: "top 70%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
  });
};

// header
export const headerAnimation = () => {
  let header = document.querySelector("header");
  let endAnimation = document.querySelector(".brand_slider");

  if (!header || !endAnimation) return;

  // entrance
  gsap.from(header, {
    opacity: 0,
    y: -100,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.5,
  });

  // background change on scroll
  gsap.to(header, {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: endAnimation,
      start: "top top",
      end: "bottom top",
      scrub: 5,
    },
  });
};
