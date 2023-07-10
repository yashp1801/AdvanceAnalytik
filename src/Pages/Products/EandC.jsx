// EandCPage.js
import React from "react";
import "./EandC.scss";
import eandcHeaderImg from "./productImages/eandc.jpg";
import img1 from "./productImages/greenfield.jpg";
import img2 from "./productImages/brownfield.jpg";
import img3 from "./productImages/environment.jpg";
import img4 from "./productImages/sampleHandling.jpg";

const EandC = () => {
  return (
    <div className="eandc-page">
      <div className="career-page-header">
        <img src={eandcHeaderImg} alt="" />
        <div className="career__page__hero__content">
          <h2 className="career-page__title">
            Engineering and Consultancy services
          </h2>
          <p className="career-page__description">
            The Applications For Our Expertise Are Diverse. So Too Are
            The Project Execution Models We Offer; Each Designed With Your Needs
            In Mind.With Us, You Receive Deep Expertise, Strong Project
            Management Capability And A Clear Focus On Safety, Integrity And
            Quality.
          </p>
        </div>
      </div>

      <div className="eandc__card__wrapper">
        <div className="eandc__card">
          <div className="eandc__card__content">
            <h2>Greenfield Projects</h2>
            <p>
              Our highly trained and experienced design engineers are
              technically capable of providing engineering solutions for
              projects within existing buildings and greenfield projects.
            </p>
          </div>
          <div className="eandc__card__img__wrapper">
            <img src={img1} alt="Liquid & Gas Sampling Systems" />
          </div>
        </div>

        <div className="eandc__card">
          <div className="eandc__card__img__wrapper">
            <img src={img2} alt="Liquid & Gas Sampling Systems" />
          </div>
          <div className="eandc__card__content">
            <h2>Brownfield Projects</h2>
            <p>
              We provide a range of products and services to greenfield and
              brownfield projects across the globe. We pride ourselves on
              challenging conventional thinking at the outset, bringing in our
              operations and construction expertise at the earliest stage to
              ensure our solutions are safe, technically sound, fit-for-purpose,
              and cost-effective.
            </p>
          </div>
        </div>

        <div className="eandc__card">
          <div className="eandc__card__content">
            <h2>Sustainable Environmental Engineering Solutions</h2>
            <p>
              Advance Analytik brings together smart minds, advanced technology,
              and local knowledge to conserve our environment and generate
              growth for businesses and communities. Sustainable development is
              driven by the three pillars of sustainability: social,
              environmental, and economic. A combination of these methods must
              be employed to ensure that no one pillar of sustainability
              overpowers the other, allowing for bearable, equitable, and viable
              solutions.
            </p>
          </div>
          <div className="eandc__card__img__wrapper">
            <img src={img3} alt="Liquid & Gas Sampling Systems" />
          </div>
        </div>

        <div className="eandc__card">
          <div className="eandc__card__img__wrapper">
            <img src={img4} alt="Liquid & Gas Sampling Systems" />
          </div>
          <div className="eandc__card__content">
            <h2>Liquid & Gas Sampling Systems</h2>
            <p>
              Optical measurement systems typically require that the sample
              undergo some conditioning to make it fit for the analyzer's
              method. Our systems are built for direct analysis without
              cooling/drying the sample. This allows us to build far simpler,
              more elegant sample conditioning systems that retain high sample
              integrity and optimal response time. Moreover, the whole system
              can be easily adapted to suit the widest variety of process
              conditions, from "easy" to complex applications, e.g., in
              corrosive or hazardous environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EandC;
