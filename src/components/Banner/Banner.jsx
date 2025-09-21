import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CanvasSequence() {
  const mainRef = useRef(null);
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices based on width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold as needed
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Make canvas fullscreen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // ---------- Frames config ----------
    const frameCount = 100; // adjust for testing (eg: 10)
    const getImagePath = (i) =>
      isMobile
        ? `/mobile-video/ezgif-frame-${String(i + 1).padStart(3, "0")}.png` // Use mobile images
        : `/desktop-video/ezgif-frame-${String(i + 1).padStart(3, "0")}.png`; // Use desktop images

    // ---------- Preload images (lightweight: render first frame as soon as loaded) ----------
    const images = new Array(frameCount);
    let firstFrameLoaded = false;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getImagePath(i);
      img.onload = () => {
        images[i] = img;
        if (!firstFrameLoaded && i === 0) {
          firstFrameLoaded = true;
          render(); // draw first frame immediately when ready
        }
      };
      img.onerror = (e) => {
        console.warn(`failed loading frame ${i}`, img.src, e);
      };
    }

    const imageSeq = { frame: 0 };

    function scaleImage(img, ctx) {
      if (!img || !img.width) return;
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }

    function render() {
      const img = images[imageSeq.frame];
      if (img && img.complete) {
        scaleImage(img, ctx);
      }
    }

    // ---------- GSAP animation (sequence) ----------
    const seqTween = gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        scroller: "body", // Use body for ScrollTrigger to map to native scroll
        start: "top top",
        end: "250% top", // Adjust this value based on how long you want the sequence
        scrub: 0.5, // Increase this value to slow down the animation
        onUpdate: render,
      },
    });

    // Pin canvas element
    ScrollTrigger.create({
      trigger: canvas,
      scroller: "body",
      pin: true,
      start: "top top",
      end: "250% top", // Adjust this to make the canvas pin for a longer scroll distance
    });

    // ---------- Resize handler ----------
    const onResize = () => {
      setCanvasSize();
      render();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    // ---------- Cleanup ----------
    return () => {
      window.removeEventListener("resize", onResize);
      seqTween && seqTween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isMobile]);

  return (
    <div id="main" ref={mainRef} data-scroll-container>
      <div id="page">
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100vh" }}
        />
      </div>
    </div>
  );
}
