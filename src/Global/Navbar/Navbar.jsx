import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "./AdvanceAnalytik.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div
        style={{
          width: "100%",
          height: "20px",
        }}
      >
        <div style={{ backgroundColor: "#cd2a3e", height: "33.33%" }}></div>
        <div style={{ backgroundColor: "#fff", height: "33.33%" }}></div>
        <div style={{ backgroundColor: "#008000", height: "33.33%" }}></div>
      </div>
      <div className="wrapper">
        <div className="navbar__logo">
          <img src={Logo} alt="Advance Analytik Logo" />
        </div>
        <ul className="navbar__links__wrapper">
          <li>
            <Link className="navbar__link">Home</Link>
          </li>
          <li>
            <Link   to={"/about"}   className="navbar__link">About</Link>
          </li>
          <li>
            <Link to={"/contact"}  className="navbar__link">Contact</Link>
          </li>
          <li>
            <Link className="navbar__link">Products</Link>
          </li>
          <li>
            <Link className="navbar__link">Carrers</Link>
          </li>
          <li>
            <Link className="navbar__link">Blog</Link>
          </li>

          <li>
            <Link className="navbar__link">Market</Link>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
