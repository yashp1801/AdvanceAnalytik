import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Global/Navbar/Navbar";
import Footer from "./Global/Footer/Footer";
import Loader from "./Global/Loader/Loader";
import Market from "./Pages/Markets/Market";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/market/:marketName" element={<Market />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
