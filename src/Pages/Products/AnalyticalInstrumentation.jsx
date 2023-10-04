import { useEffect } from "react";
import "./AnalyticalInstrumentation.scss";
import { Link } from "react-router-dom";
import analyticalInstrumentataionImg from "./productImages/analyticalInstrumentataion.jpg";
import analyticalInstrumentataionImg2 from "./productImages/analyticalInstrumentataionPartnership.jpg";
import img1 from "./productImages/analyzers.png";
import { FiArrowUpRight } from "react-icons/fi";
import img2 from "./productImages/controllers.png";
import img3 from "./productImages/sensors.png";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BiMouse } from "react-icons/bi";

const AnalyticalInstrumentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="analyticalInstrumentation">
      <div className="analyticalInstrumentation__header">
        <div className="analyticalInstrumentation__header__content">
          <h1>Analytical Instumentation</h1>
          <p>
            Welcome to the Advance Analytik Analytical Instrumentation Page.
            Here, you will discover a wide range of advanced instruments and
            solutions designed to empower accurate and precise analysis in
            various industries and research fields. Our state-of-the-art
            analytical instruments are meticulously crafted to meet the evolving
            demands of modern analysis, enabling businesses to gain valuable
            insights, drive innovation, and ensure quality control.
          </p>
          <span>
            Scroll down <BiMouse className="analyticalInstrumentation__header__content__icon" />{" "}
          </span>
        </div>
        <div className="analyticalInstrumentation__header__img__wrapper">
          <img src={analyticalInstrumentataionImg} alt="" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="analyticalInstrumentation__header__waves"
        >
          <path
            fill="#f5f5f5"
            fill-opacity="1"
            d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,218.7C672,203,768,213,864,229.3C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="analyticalInstrumentation__content">
        <h1 className="analyticalInstrumentation__content__title">
          Advanced Analytical Instrumentation Solutions
        </h1>
        <div className="analyticalInstrumentation__content__cards__wrapper">
          <Link
            to={"/products/analyzers"}
            className="analyticalInstrumentation__content__card"
          >
            <div className="analyticalInstrumentation__content__card__img__wrapper">
              <img
                src={img1}
                alt="Advance Analytik analyzers"
                className="analyticalInstrumentation__content__card__img"
              />
            </div>
            <div className="analyticalInstrumentation__content__card__content">
              <h1>Analyzers: Comprehensive Analysis, Profound Insights</h1>
              <p>
                Our analyzers delve deep into sample composition, providing
                comprehensive analysis and profound insights. From gas analyzers
                deciphering atmospheric content to liquid analyzers unveiling
                liquid properties, our analyzers offer a window into the heart
                of your samples.
              </p>
              <span className="analyticalInstrumentation__content__card__content__link">
                View Range{" "}
                <BsArrowRightCircleFill className="analyticalInstrumentation__content__card__content__link__icon" />
              </span>
            </div>
          </Link>
          <Link
            to={"/products/controllers"}
            className="analyticalInstrumentation__content__card"
          >
            <div className="analyticalInstrumentation__content__card__img__wrapper">
              <img
                src={img2}
                alt="Advance Analytik analyzers"
                className="analyticalInstrumentation__content__card__img"
              />
            </div>
            <div className="analyticalInstrumentation__content__card__content">
              <h1> Controllers: Precision in Your Hands</h1>

              <p>
                Our controllers offer unparalleled precision, ensuring optimal
                performance of your analytical instruments. Designed to enhance
                efficiency and streamline processes, our controllers allow you
                to exert precise control over parameters such as temperature,
                pH, and more. With our controllers, you're in command of your
                analytical journey.
              </p>
              <span className="analyticalInstrumentation__content__card__content__link">
                View Range{" "}
                <BsArrowRightCircleFill className="analyticalInstrumentation__content__card__content__link__icon" />
              </span>
            </div>
          </Link>
          <Link
            to={"/products/sensors"}
            className="analyticalInstrumentation__content__card"
          >
            <div className="analyticalInstrumentation__content__card__img__wrapper">
              <img
                src={img3}
                alt="Advance Analytik analyzers"
                className="analyticalInstrumentation__content__card__img"
              />
            </div>
            <div className="analyticalInstrumentation__content__card__content">
              <h1>Sensors: Real-time Insights for Reliable Analysis</h1>
              <p>
                Our sensors provide real-time insights critical for accurate
                analysis. From pH sensors illuminating acidity levels to
                turbidity sensors gauging clarity, our sensors provide the data
                you need. These insights are invaluable across various
                industries, including water treatment, food production, and
                pharmaceuticals.
              </p>
              <span className="analyticalInstrumentation__content__card__content__link">
                View Range{" "}
                <BsArrowRightCircleFill className="analyticalInstrumentation__content__card__content__link__icon" />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="analyticalInstrumentation__partnership__section__wrapper">
        <div className="analyticalInstrumentation__partnership__section__content__wrapper">
          <h1>Partner with Advance Analytik: Elevate Your Analysis</h1>
          <p>
            Choose Advance Analytik as your analytical instrumentation partner
            and unlock the power of precision, efficiency, and reliability. Our
            instruments are more than tools; they're the catalysts for your
            analytical success. Empower your analyses, uphold quality, and lead
            scientific advancement with Advance Analytik.
          </p>
          <p>
            Contact us today to explore our range of controllers, sensors, and
            analyzers, and discover the transformative potential of analytical
            excellence.
          </p>
        </div>
        <div className="analyticalInstrumentation__partnership__section__img__wrapper">
          <img src={analyticalInstrumentataionImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticalInstrumentation;
