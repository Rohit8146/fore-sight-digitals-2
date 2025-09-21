import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const cursorOuterRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOuter = cursorOuterRef.current;

    const moveHandler = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        ease: "linear",
        duration: 0.2,
      });

      gsap.to(cursorOuter, {
        x: e.clientX,
        y: e.clientY,
        ease: "linear",
        duration: 0.3,
      });
    };

    document.addEventListener("mousemove", moveHandler);

    const links = document.querySelectorAll("a");

    const enterHandler = () => {
      gsap.to(cursor, {
        scale: 3.2,
        backgroundColor: "#ffffff21",
        duration: 0.3,
        border: 0,
        ease: "linear",
      });
    };

    const leaveHandler = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff",
        duration: 0.3,
        ease: "linear",
      });
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", enterHandler);
      link.addEventListener("mouseleave", leaveHandler);
    });

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enterHandler);
        link.removeEventListener("mouseleave", leaveHandler);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorOuterRef} className="cursor-outer"></div>
      <div ref={cursorRef} className="cursor-inner"></div>
    </>
  );
}

export default Cursor;
