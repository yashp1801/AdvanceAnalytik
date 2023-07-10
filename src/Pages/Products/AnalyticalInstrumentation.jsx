import React from "react";
import "./AnalyticalInstrumentation.scss";
import { Link } from "react-router-dom";
import analyticalInstrumentataionImg from "./productImages/analyticalInstrumentataion.jpg";
import img1 from "./productImages/analyzers.png";
import { FiArrowUpRight } from "react-icons/fi";
import img2 from "./productImages/controllers.png";
import img3 from "./productImages/sensors.png";

const AnalyticalInstrumentation = () => {
  return (
    <div className="analyticalInstrumentation">
      <div className="analyticalInstrumentation__header">
        <img src={analyticalInstrumentataionImg} alt="" />
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
        </div>
      </div>
      <div className="analyticalInstrumentation__content">
        <div className="analyticalInstrumentation__content__cards__wrapper">
          <div className="analyticalInstrumentation__content__card">
            <div className="analyticalInstrumentation__content__card__img__wrapper">
              <img
                src={img1}
                alt="Advance Analytik analyzers"
                className="analyticalInstrumentation__content__card__img"
              />
            </div>
            <div className="analyticalInstrumentation__content__card__content">
              <h1>Analyzers</h1>
              <Link
                to={"/products"}
                className="analyticalInstrumentation__content__card__content__link"
              >
                View Range{" "}
                <FiArrowUpRight className="analyticalInstrumentation__content__card__content__link__icon" />{" "}
              </Link>
            </div>
          </div>
          <div className="analyticalInstrumentation__content__card">
            <div className="analyticalInstrumentation__content__card__img__wrapper">
              <img
                src={img2}
                alt="Advance Analytik analyzers"
                className="analyticalInstrumentation__content__card__img"
              />
            </div>
            <div className="analyticalInstrumentation__content__card__content">
              <h1> Controllers</h1>
              <Link
                to={"/products"}
                className="analyticalInstrumentation__content__card__content__link"
              >
                View Range{" "}
                <FiArrowUpRight className="analyticalInstrumentation__content__card__content__link__icon" />{" "}
              </Link>
            </div>
          </div>
          <div className="analyticalInstrumentation__content__card">
            <div className="analyticalInstrumentation__content__card__img__wrapper">
              <img
                src={img3}
                alt="Advance Analytik analyzers"
                className="analyticalInstrumentation__content__card__img"
              />
            </div>
            <div className="analyticalInstrumentation__content__card__content">
              <h1>Sensors</h1>
              <Link
                to={"/products"}
                className="analyticalInstrumentation__content__card__content__link"
              >
                View Range{" "}
                <FiArrowUpRight className="analyticalInstrumentation__content__card__content__link__icon" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticalInstrumentation;
