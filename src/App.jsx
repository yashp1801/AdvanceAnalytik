import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Global/Navbar/Navbar";
import Footer from "./Global/Footer/Footer";
import Loader from "./Global/Loader/Loader";
import Market from "./Pages/Markets/Market";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Career from "./Pages/Career/Career";
import Products from "./Pages/Products/Products";
import AnalyticalInstrumentation from "./Pages/Products/AnalyticalInstrumentation";
import SelectedProductPopup from "./Pages/Products/SelectedProductPopup";
import IotDevicesPage from "./Pages/Products/IotDevicesPage";
import ScrollToTopButton from "./Global/ScrollToTopButton/ScrollToTopButton";
import EandC from "./Pages/Products/EandC";
import SoftwareDevelopmentServices from "./Pages/Products/SoftwareDevelopnment";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/products" element={<Products />} />
            <Route path="/market/:marketName" element={<Market />} />
            <Route
              path="/products/selectedproduct"
              element={<SelectedProductPopup />}
            />
            <Route
              path="/services/analyticalinstrumentation"
              element={<AnalyticalInstrumentation />}
            />

            <Route path="/services/iotdevices" element={<IotDevicesPage />} />
            <Route
              path="/services/engineeringandconsultancyservices"
              element={<EandC />}
            />
            <Route
              path="/services/softwaredevelopmentservices"
              element={<SoftwareDevelopmentServices />}
            />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
