import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// BANNER VIDEO ANIMATION
export function bannerVideoAnimation(videoRef) {
  const video = videoRef?.current;
  if (!video) return;

  video.addEventListener("loadedmetadata", () => {
    gsap
      .timeline({
        scrollTrigger: {
          id: "banner-video",
          trigger: video,
          start: "top top",
          end: "bottom+=1500", // Adjusted for less conflict
          scrub: 2,
          // markers: true,
        },
      })
      .to(video, {
        currentTime: video.duration,
        ease: "none",
      });
  });
}

// OUR SERVICES SECTION
export function ourCardsAnmimation() {
  const wrapper = document.querySelector(".Ourwork-Card_wrapper");
  const cards = wrapper?.querySelectorAll(".Ourwork_card");
  if (!wrapper || !cards.length) return;

  gsap.set(cards, { height: "60vh" });
  gsap.set(wrapper, { height: "100vh" });

  gsap
    .timeline({
      scrollTrigger: {
        id: "our-services",
        trigger: wrapper,
        start: "top top",
        end: "+=1000", // Reduced scroll range
        pin: true,
        scrub: 2,
        // markers: true,
      },
      defaults: { ease: "power2.out", duration: 1 },
    })
    .to(cards, { height: "33vh" }, 0);
}

// OUR WORK CARDS
export const ourWorkAnimation = () => {
  const cards = document.querySelectorAll(
    ".card_wrapper .ourwork-card__outer img"
  );
  if (!cards.length) return;

  cards.forEach((card, index) => {
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
          id: `our-work-card-${index}`,
          trigger: card,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  });
};

// WHY FORESIGHT SECTION
export const whyForesightAnination = (index) => {
  const container = document.querySelector(".hover_card");
  const images = container?.querySelectorAll("img");
  if (!images?.length) return;

  const imageHeight = images[0].offsetHeight || 0;
  gsap.to(images, {
    y: -(index * imageHeight),
    duration: 0.6,
    ease: "power1.out",
  });
};

// FOOTER LOGO ANIMATION
export const footerAnimation = () => {
  window.addEventListener("load", () => {
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
            // markers: true,
          },
        })
        .to(image, {
          y: -index * 18,
          ease: "linear",
        });
    });
  });
};

// IMAGE + TEXT SECTION
export const imageTextAnimation = () => {
  const container = document.querySelector(".image-with-text");
  if (!container) return;

  gsap.from(container, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      id: "image-text",
      trigger: container,
      start: "top 70%",
      end: "bottom top",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });
};

// HEADER BEHAVIOR
export const headerAnimation = () => {
  const header = document.querySelector("header");
  const triggerElement = document.querySelector(".brand_slider");
  if (!header || !triggerElement) return;

  // Initial appearance
  gsap.from(header, {
    opacity: 0,
    y: -100,
    duration: 0.2,
    ease: "power2.out",
  });

  // Change background on scroll
  gsap.to(header, {
    backgroundColor: "#000",
    scrollTrigger: {
      id: "header-bg",
      trigger: triggerElement,
      start: "top top",
      end: "bottom top",
      scrub: 2,
      // markers: true,
    },
  });
};
