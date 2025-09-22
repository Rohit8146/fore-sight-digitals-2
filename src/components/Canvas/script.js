import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

function canvasGenerator() {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  const setCanvasSize = () => {
    const pixelRatio = window.devicePixelRatio || 1;

    // ✅ Detect mobile with matchMedia
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const width = window.innerWidth;
    // ✅ On mobile, make banner shorter so it doesn’t look oversized
    const height = isMobile ? window.innerHeight * 1 : window.innerHeight;

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(pixelRatio, pixelRatio);
  };
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  // 🔑 Desktop vs Mobile frames
  const desktopFrameCount = 239;
  const mobileFrameCount = 301;

  const currentFrame = (index, isMobile) =>
    isMobile
      ? `./Mobile_frames/frame_${(index + 1).toString().padStart(4, "0")}.webp`
      : `./Desktop_frames/frame_${(index + 1)
          .toString()
          .padStart(4, "0")}.webp`;

  let images = [];
  let videoFrame = { frame: 0 };

  // ✅ Use matchMedia instead of innerWidth
  let isMobile = window.matchMedia("(max-width: 768px)").matches;
  let frameCount = isMobile ? mobileFrameCount : desktopFrameCount;

  console.log("isMobile:", isMobile);

  function loadImages() {
    images = [];
    frameCount = isMobile ? mobileFrameCount : desktopFrameCount;
    let imagesToLoad = frameCount;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = currentFrame(i, isMobile);
      images.push(img);
    }

    function onLoad() {
      imagesToLoad--;
      if (imagesToLoad === 0) {
        setCanvasSize(); // ✅ resize properly once images are loaded
        render();
        setUpScrollTrigger();
      }
    }
  }

  const render = () => {
    const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
    const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    const img = images[videoFrame.frame];
    if (img && img.complete && img.naturalWidth > 0) {
      const imageAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = canvasWidth / canvasHeight;

      let drawWidth, drawHeight, drawX, drawY;

      if (imageAspect > canvasAspect) {
        drawHeight = canvasHeight;
        drawWidth = drawHeight * imageAspect;
        drawX = (canvasWidth - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = drawWidth / imageAspect;
        drawX = 0;
        drawY = (canvasHeight - drawHeight) / 2;
      }

      context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }
  };

  function setUpScrollTrigger() {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `+=${window.innerWidth * 2.5}px`,
      pin: true,
      pinSpacing: false,
      scrub: 5,
      onUpdate: (self) => {
        const frame = Math.floor(self.progress * (frameCount - 1));
        videoFrame.frame = frame;
        render();
      },
    });
  }

  // ✅ Load initial images
  loadImages();

  // ✅ Re-check when resizing
  window.addEventListener("resize", () => {
    const nowMobile = window.matchMedia("(max-width: 768px)").matches;
    if (nowMobile !== isMobile) {
      isMobile = nowMobile;
      loadImages();
    }
  });
}

export default canvasGenerator;
