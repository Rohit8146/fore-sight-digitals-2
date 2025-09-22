import React, { useEffect, useRef, useState } from "react";
import videoSource from "../../assets/videos/banner_120.mp4";
import mobileVideo from "../../assets/videos/output_mobile.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Banner() {
  const videoRef = useRef(null);
  const videoContainer = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      }
    });

    gsap.registerPlugin(ScrollTrigger);

    const coolVideo = videoRef.current;

    coolVideo.pause();

    const handleLoaded = () => {
      const duration = coolVideo.duration;

      ScrollTrigger.create({
        trigger: coolVideo,
        start: "top top",
        end: "250% top",
        scrub: 3,
        pin: true,
        onUpdate: (self) => {
          coolVideo.currentTime = self.progress * duration;
        },
      });
    };

    coolVideo.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      coolVideo.removeEventListener("loadedmetadata", handleLoaded);
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div ref={videoContainer} id="banner" className="banner">
      <video ref={videoRef} className="video" playsInline preload="auto" muted>
        <source src={isMobile ? mobileVideo : videoSource} type="video/mp4" />
      </video>
    </div>
  );
}

export default Banner;