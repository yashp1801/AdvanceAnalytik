import React, { useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = ({ setShowSidebar }) => {
  const [openFirstSubmenu, setOpenFirstSubmenu] = useState(false);
  const [openSecondSubmenu, setOpenSecondSubmenu] = useState(false);

  const toggleFirstSubmenu = () => {
    setOpenFirstSubmenu(!openFirstSubmenu);
    setOpenSecondSubmenu(false);
  };

  const toggleSecondSubmenu = () => {
    setOpenSecondSubmenu(!openSecondSubmenu);
    setOpenFirstSubmenu(false);
  };

  return (
    <div className="sidebar">
      <Link className="menu-link" to="/" onClick={() => setShowSidebar(false)}>
        Home
      </Link>
      <Link
        className="menu-link"
        to="/about"
        onClick={() => setShowSidebar(false)}
      >
        About
      </Link>
      <button
        className={`collapsible ${openFirstSubmenu ? "active" : ""}`}
        onClick={toggleFirstSubmenu}
      >
        Products <IoIosArrowDown className="collapsible__icon" />
      </button>
      <div
        className={`collapsible-content ${openFirstSubmenu ? "active" : ""}`}
      >
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/services/analyticalinstrumentation"}
        >
          Analytical Instrumentation
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/services/engineeringandconsultancyservices"}
        >
          Engineering and Consultancy Services
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/services/softwaredevelopmentservices"}
        >
          Software Development
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/services/iotdevices"}
        >
          IOT Devices
        </Link>
      </div>
      <button
        className={`collapsible ${openSecondSubmenu ? "active" : ""}`}
        onClick={toggleSecondSubmenu}
      >
        Markets{" "}
        <IoIosArrowDown
          onClick={() => setShowSidebar(false)}
          className="collapsible__icon"
        />
      </button>
      <div
        onClick={() => setShowSidebar(false)}
        className={`collapsible-content ${openSecondSubmenu ? "active" : ""}`}
      >
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/pulpandpaper"}
        >
          Pulp & Paper
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/distillery"}
        >
          Distillery
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/sugar"}
        >
          Sugar
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/tanneries"}
        >
          Tanneries
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/powerplants"}
        >
          Power Plants
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/cement"}
        >
          Cement
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/choralakaliplants"}
        >
          Chloral Alkali Plants
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/oilrefineries"}
        >
          Oil Refineries
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/dyeintermediateunits"}
        >
          Dye & Dye Intermediate Units
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/cetp&stps"}
        >
          cetp&stps
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/pesticides"}
        >
          Pesticides
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/pharmaceuticalsector"}
        >
          Pharmaceutical Sector
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/commonbiomedicalwaste"}
        >
          Common Biomedical Waste
        </Link>
        <Link
          onClick={() => setShowSidebar(false)}
          className="menu-link"
          to={"/market/commonhazardouswasteincinerator"}
        >
          Common Hazardous Waste Incinerator
        </Link>
      </div>
      <Link
        to={"/careers"}
        onClick={() => setShowSidebar(false)}
        className={`menu-link   `}
      >
        Careers
      </Link>
      <Link to={"/contact"} className={`menu-link   `}  onClick={() => setShowSidebar(false)}>
        Contact
      </Link>
    </div>
  );
};

export default Sidebar;
