import React from "react";
import { motion } from "framer-motion";
import "./Home.scss";
import HeroSlider from "./Components/HeroSlider";
import homeAbout from "./images/homeAbout.jpg";
import homeProducts from "./images/homeproducts.png";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import abstractDots from "./images/abstractdots.png";
import HomeWhyUs from "./Components/HomeWhyUs";

const Home = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <div className="home">
      <HeroSlider />

      <motion.div
        className="home__content"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="home__about">
          <img src={homeAbout} alt="img" />
          <motion.p className="home__description">
            At Advance Analytik, we specialize in providing state-of-the-art
            online monitoring solutions for industries across the globe. Our
            advanced technologies enable real-time data acquisition, precise
            measurements, and comprehensive analysis, empowering businesses to
            optimize their processes, ensure compliance, and drive operational
            efficiency.
          </motion.p>
        </div>

        <motion.div
          className="home__product-list"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h2
            className="home__product-list-title"
            variants={fadeInVariants}
          >
            Cutting-Edge Monitoring Technologies for Every Industry
          </motion.h2>
          <div className="home__products__content__wrapper">
            <div className="home__products__list__content__wrapper">
              <motion.ul
                className="home__product-list-items"
                variants={fadeInVariants}
              >
                <motion.li className="home__product-list-item">
                  pH Meters
                </motion.li>
                <motion.li className="home__product-list-item">
                  ORP Meters
                </motion.li>
                <motion.li className="home__product-list-item">
                  TDS Meters
                </motion.li>
                <motion.li className="home__product-list-item">
                  Turbidity Meters
                </motion.li>
                <motion.li className="home__product-list-item">
                  COD/BOD/TSS Analyzers
                </motion.li>
                <motion.li className="home__product-list-item">
                  Chlorine Meters
                </motion.li>
                <motion.li className="home__product-list-item">
                  Conductivity Meters
                </motion.li>
              </motion.ul>
              <motion.p
                className="home__products__discription"
                variants={fadeInVariants}
              >
                These instruments are built with the latest technology and
                industry-leading accuracy to deliver reliable and precise
                monitoring results.
              </motion.p>
              <Link to={"/products"} className="home__products__list__link">
                {" "}
                View Products Range <FiArrowUpRight />{" "}
              </Link>
            </div>
            <div className="home__products__img__wrapper">
              <img src={abstractDots} alt="" className="home__products__dots__img" />
              <img src={homeProducts} alt="" />
              <span>(Advance Analytik Controller , Analyzer , Sensor)</span>
            </div>
          </div>
        </motion.div>
        <HomeWhyUs />
        <motion.div
          className="home__tailored-solutions"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.h2
            className="home__tailored-solutions-title"
            variants={fadeInVariants}
          >
            Tailored Solutions for Your Industry
          </motion.h2>
          <motion.p className="home__description" variants={fadeInVariants}>
            We understand that every industry has unique monitoring
            requirements. That's why we provide customized solutions that are
            specifically tailored to meet the challenges and demands of your
            industry. Whether you operate in the pulp and paper sector,
            distilleries, power plants, or any other industry, our team of
            experts will work closely with you to deliver the right monitoring
            solution that aligns with your goals and regulatory compliance
            needs.
          </motion.p>
        </motion.div>

        <motion.div
          className="home__partnering"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.h2
            className="home__partnering-title"
            variants={fadeInVariants}
          >
            Partnering for Success
          </motion.h2>
          <motion.p className="home__description" variants={fadeInVariants}>
            At Advance Analytik, we believe in building strong partnerships with
            our clients. We work closely with you to understand your specific
            needs, challenges, and goals. Our team of experts provides
            comprehensive support, from initial consultation and product
            selection to installation, training, and ongoing technical
            assistance. We are committed to your success and strive to be your
            trusted partner in achieving excellence through advanced monitoring
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="home__empowering"
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.h2
            className="home__empowering-title"
            variants={fadeInVariants}
          >
            Empowering Your Business
          </motion.h2>
          <motion.p className="home__description" variants={fadeInVariants}>
            By choosing Advance Analytik, you gain access to cutting-edge
            monitoring technologies that empower your business to make
            data-driven decisions, optimize processes, and drive efficiency. Our
            intuitive interfaces, advanced analytics, and real-time monitoring
            capabilities provide you with the insights needed to stay ahead in a
            competitive landscape. Experience the power of our solutions and
            unlock new levels of productivity, quality, and compliance for your
            business.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
