// LandingPage.jsx

import React from "react";
import "./Services.scss";
// import spectrophotometerImage from "../assets/spectrophotometer.jpg";
// import chromatographyImage from "../assets/chromatography.jpg";
// import massSpectrometerImage from "../assets/mass_spectrometer.jpg";
// import elementalAnalyzerImage from "../assets/elemental_analyzer.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__header">
        <h1 className="landing-page__title">
          Advanced Analytical Instrumentation Solutions
        </h1>
        <p className="landing-page__subtitle">
          At Advance Analytik, we offer a wide range of advanced analytical
          instrumentation solutions to meet the diverse needs of industries and
          research laboratories.
        </p>
      </div>
      <div className="landing-page__content">
        <h2 className="landing-page__section-title">
          State-of-the-Art Instruments for Accurate Analysis
        </h2>
        <div className="landing-page__instrument">
          <div className="landing-page__instrument-info">
            <h3 className="landing-page__instrument-title">
              Spectrophotometers
            </h3>
            <p className="landing-page__instrument-description">
              Our spectrophotometers are equipped with advanced optics and
              powerful software to deliver precise measurements of absorbance,
              transmittance, and fluorescence.
            </p>
          </div>
          <img
            className="landing-page__instrument-image"
            // src={spectrophotometerImage}
            alt="Spectrophotometer"
          />
        </div>
        <div className="landing-page__instrument">
          <div className="landing-page__instrument-info">
            <h3 className="landing-page__instrument-title">
              Chromatography Systems
            </h3>
            <p className="landing-page__instrument-description">
              We offer a range of chromatography systems, including
              high-performance liquid chromatography (HPLC) and gas
              chromatography (GC), to separate, identify, and quantify
              components in complex mixtures.
            </p>
          </div>
          <img
            className="landing-page__instrument-image"
            // src={chromatographyImage}
            alt="Chromatography Systems"
          />
        </div>
        <div className="landing-page__instrument">
          <div className="landing-page__instrument-info">
            <h3 className="landing-page__instrument-title">
              Mass Spectrometers
            </h3>
            <p className="landing-page__instrument-description">
              Our mass spectrometers provide unparalleled sensitivity and
              resolution for the identification and quantification of compounds.
            </p>
          </div>
          <img
            className="landing-page__instrument-image"
            // src={massSpectrometerImage}
            alt="Mass Spectrometers"
          />
        </div>
        <div className="landing-page__instrument">
          <div className="landing-page__instrument-info">
            <h3 className="landing-page__instrument-title">
              Elemental Analyzers
            </h3>
            <p className="landing-page__instrument-description">
              Our elemental analyzers enable precise determination of elemental
              composition in various samples.
            </p>
          </div>
          <img
            className="landing-page__instrument-image"
            // src={elementalAnalyzerImage}
            alt="Elemental Analyzers"
          />
        </div>
      </div>
      <div className="landing-page__footer">
        <h2 className="landing-page__footer-title">
          Partner with Advance Analytik
        </h2>
        <p className="landing-page__footer-description">
          By partnering with Advance Analytik for your analytical
          instrumentation needs, you gain access to advanced technology,
          reliable performance, and exceptional support.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
