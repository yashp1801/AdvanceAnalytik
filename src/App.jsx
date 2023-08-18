// App.js
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./Pages/Home/Home";
import Navbar from "./Global/Navbar/Navbar";
import Footer from "./Global/Footer/Footer";
import Loader from "./Global/Loader/Loader";
import Market from "./Pages/Markets/Market";
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
import Sensors from "./Pages/Products/ProductPages/Sensors";
import Controllers from "./Pages/Products/ProductPages/Controllers";
import Analyzers from "./Pages/Products/ProductPages/Analyzers";
import PrivacyPolicy from "./Pages/LegalPages/PrivacyPolicy";
import TermsOfUse from "./Pages/LegalPages/TermsOfUse";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/40206010.js"
        ></script>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar onLanguageChange={handleLanguageChange} />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/market/:marketName" element={<Market />} />
            <Route path="/products/sensors" element={<Sensors />} />
            <Route path="/products/controllers" element={<Controllers />} />
            <Route path="/products/analyzers" element={<Analyzers />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsofuse" element={<TermsOfUse />} />
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
