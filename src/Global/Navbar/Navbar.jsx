import { useEffect, useState } from "react";
import "./Navbar.scss";
import AAlogo from "./AdvanceAnalytik.png";
import hungaryFlag from "./hungary.png";
import ukFlag from "./uk.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState("");

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
  return (
    <nav className="navbar">
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
        <div className="navbar__header__logo">
          <img src={AAlogo} alt="" />
        </div>
        <ul className="navbar__links__wrapper">
          <li>
            <Link to={"/"} className={`navbar__link ${navbarBgColor}  `}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={`navbar__link  `}>
              About
            </Link>
          </li>
          <li>
            <Link className={`navbar__link   `}>
              Products <IoMdArrowDropdown className="navbar__link__icon" />{" "}
            </Link>
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
            <Link className={`navbar__link   `}>
              Market <IoMdArrowDropdown className="navbar__link__icon" />{" "}
            </Link>
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
                  cetp&stps
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
            <Link className={`navbar__link   `}>Blog</Link>
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
        </ul>
        <div className="navbar__header__language__changer__wrapper">
          <div className="navbar__header__language__changer">
            <img
              src={ukFlag}
              alt=""
              style={{ borderRight: "1px solid #000000", paddingRight: "10px" }}
            />
          </div>
          <div className="navbar__header__language__changer">
            <img src={hungaryFlag} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
