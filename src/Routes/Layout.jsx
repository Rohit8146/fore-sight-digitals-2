import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./../pages/Homepage";
import Portfolio from "./../pages/Portfolio";
import Service from "./../pages/Service";
import Contact from "../pages/Contact";
import Loader from "../components/Loader/Loader";
import NotFound from "../pages/404";

function Layout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    // Disable scroll
    document.body.style.overflowY = "hidden";

    const bodyTimeout = setTimeout(() => {
      document.body.style.overflowY = "unset";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 6000);

    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 10000);

    // ✅ cleanup: clear timers + reset scroll in case component unmounts early
    return () => {
      clearTimeout(bodyTimeout);
      clearTimeout(loaderTimeout);
      document.body.style.overflowY = "unset";
    };
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div
        className={`${
          loading ? "opacity-50" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
