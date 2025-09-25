import { useEffect, useState } from "react";
import Logo from "../../../public/foresight_headerLogo.png";
import HeaderLink from "./HeaderLink";
import headerData from "./data.js";
import { Link } from "react-router-dom";
import { headerAnimation } from "../../utils/animations.js";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
    const mobileWidth = window.innerWidth;
    mobileWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener("resize", () => {
      const mobileWidth = window.innerWidth;
      if (mobileWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    headerAnimation();

    if (location.pathname != "/") {
      document.querySelector("header").style.backgroundColor = "#0f0f0f";
    } else {
      document.querySelector("header").style.backgroundColor = "transparent";
    }
  }, [location.pathname]);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header
      className={`header fixed top-0 left-0 w-full z-999 transition-colors duration-500 `}
    >
      <div className="container mx-auto">
        <div className="header_inner flex space-between items-center py-5 w-full">
          <div className="logo_wrapper w-full">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div
            className={`${
              toggle ? "mobile-navigation" : "hide_navigation"
            } navigation w-full align-middle items-center`}
          >
            <ul className="flex align-center gap-20 w-full justify-end header-style">
              {isMobile ? (
                <CloseIcon color="white" onClick={handleToggle} />
              ) : null}
              {headerData.map((item, index) => (
                <HeaderLink item={item} index={index} key={index} />
              ))}
            </ul>
          </div>
          {isMobile ? <MenuIcon color="white" onClick={handleToggle} /> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
