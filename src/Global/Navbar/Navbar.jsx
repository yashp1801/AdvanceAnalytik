import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.scss";
import AAlogo from "./AdvanceAnalytik.png";
import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBgColor("scrolled");
      } else {
        setNavbarBgColor("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: -100, // Start from above the screen
    },
    visible: {
      opacity: 1,
      y: 0, // End at the original postion 
      transition: {
        delay: 1,
        duration: 0.5, // Duration of the animation
      },
    },
  };

  const handleMobileMenuToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      className={`navbar ${showMobileMenu ? "show-mobile-menu" : ""}`}
    >
      <div
        style={{
          width: "100%",
          height: "15px",
        }}
      >
        <div style={{ backgroundColor: "#cd2a3e", height: "33.33%" }}></div>
        <div style={{ backgroundColor: "#fff", height: "33.33%" }}></div>
        <div style={{ backgroundColor: "#008000", height: "33.33%" }}></div>
      </div>
      <div className="navbar__header">
        <Link to={"/"} className="navbar__header__logo">
          <img src={AAlogo} alt="Advance analytik logo" />
        </Link>
        <div
          className="navbar__mobile-menu-toggle"
          onClick={handleMobileMenuToggle}
        >
          <div className="navbar__mobile-menu-toggle__bar"></div>
          <div className="navbar__mobile-menu-toggle__bar"></div>
          <div className="navbar__mobile-menu-toggle__bar"></div>
        </div>
        <ul
          className={`navbar__links__wrapper ${
            showMobileMenu ? "show-mobile-menu" : ""
          }`}
        >
          <li>
            <Link to={"/"} className={`navbar__link`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={`navbar__link  `}>
              About
            </Link>
          </li>
          <li>
            <Link className={`navbar__link   `}>Products</Link>
            <div className="markets__submenu">
              <div className="markets__submenu__links__wrapper">
                <Link
                  className="markets__submenu__link"
                  to={"/services/analyticalinstrumentation"}
                >
                  Analytical Instrumentation
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/services/engineeringandconsultancyservices"}
                >
                  Engineering and Consultancy Services
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/services/softwaredevelopmentservices"}
                >
                  Software Development
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/services/iotdevices"}
                >
                  IOT Devices
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link className={`navbar__link`}>Market</Link>
            <div className="markets__submenu">
              <div className="markets__submenu__links__wrapper">
                <Link
                  className="markets__submenu__link"
                  to={"/market/pulpandpaper"}
                >
                  Pulp & Paper
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/distillery"}
                >
                  Distillery
                </Link>
                <Link className="markets__submenu__link" to={"/market/sugar"}>
                  Sugar
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/tanneries"}
                >
                  Tanneries
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/powerplants"}
                >
                  Power Plants
                </Link>
                <Link className="markets__submenu__link" to={"/market/cement"}>
                  Cement
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/choralakaliplants"}
                >
                  Chloral Alkali Plants
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/oilrefineries"}
                >
                  Oil Refineries
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/dyeintermediateunits"}
                >
                  Dye & Dye Intermediate Units
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/cetp&stps"}
                >
                  CETP&STPS
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/pesticides"}
                >
                  Pesticides
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/pharmaceuticalsector"}
                >
                  Pharmaceutical Sector
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/commonbiomedicalwaste"}
                >
                  Common Biomedical Waste
                </Link>
                <Link
                  className="markets__submenu__link"
                  to={"/market/commonhazardouswasteincinerator"}
                >
                  Common Hazardous Waste Incinerator
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link to={"/careers"} className={`navbar__link   `}>
              Careers
            </Link>
          </li>

          <li>
            <Link to={"/contact"} className={`navbar__link   `}>
              Contact
            </Link>
          </li>
          {/* Add other menu items here */}
        </ul>
      </div>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </motion.nav>
  );
};

export default Navbar;
