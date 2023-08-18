import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home.scss";
import HeroSlider from "./Components/HeroSlider";
import HomeBlogSlider from "./Components/HomeBlogSlider";
import homeAbout from "./images/homeAbout.jpg";
import { Link } from "react-router-dom";
import sustainability from "./images/sustainability.png";
import eandc from "./images/homeservicescard.jpg";
import softwaredevelopmentcard from "./images/softwaredevelopmentcard.jpg";
import companyprofile from "./images/companyprofile.png";
import homeproductscard from "./images/homeservicesproductscard.png";
import { BsArrowRightCircleFill, BsArrowRightShort } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slideUpVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
  });
  return (
    <div className="home">
      <HeroSlider />

      <motion.div
        className="home__content"
        initial="hidden"
        animate="visible"
        variants={slideUpVariants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="home__about">
          <img src={homeAbout} alt="img" />
          <div className="home__description">
            <h1>Pioneering Analytical Excellence</h1>
            <motion.p>
              At Advance Analytik, we are passionate about empowering scientific
              advancements through cutting-edge analytical solutions. With a
              strong commitment to precision and performance, we offer a
              comprehensive range of state-of-the-art analytical instruments,
              including spectrophotometers, chromatography systems, mass
              spectrometers, and elemental analyzers. Our instruments have
              played a crucial role in groundbreaking research and quality
              control across diverse industries, enabling scientists to uncover
              critical insights and make significant contributions to their
              respective fields. Partner with us and experience the power of
              analytical innovation with Advance Analytik.
            </motion.p>
            <Link to="/about" className="home__desciption__link">
              More about us <BsArrowRightShort />
            </Link>
          </div>
        </div>

        <div className="home__services__section">
          <h1>Unleash Innovation with Our Spectrum of Solutions</h1>
          <div className="home__services__card__wrapper">
            <div className="home__services__card">
              <img src={homeproductscard} alt="" />
              <div className="home__services__card__content">
                <h1>
                  Cutting-Edge Analytical <br /> Instruments
                </h1>
                <p>
                  Our arsenal of advanced instruments, from precision sensors to
                  comprehensive analyzers, is designed to empower your
                  analytical prowess. Seamlessly integrate technology with your
                  vision to achieve unprecedented accuracy and insights.
                </p>
              </div>
              <Link to="/about" className="home__services__btn">
                View Products Range{" "}
                <BsArrowRightCircleFill className="home__services__btn__icon" />
              </Link>
            </div>
            <div className="home__services__card">
              <img src={eandc} alt="" />
              <div className="home__services__card__content">
                <h1>Engineering Marvels and Consultancy Brilliance</h1>
                <p>
                  Our team of seasoned experts doesn't just solve problems –
                  they engineer solutions. From optimizing existing processes to
                  envisioning cutting-edge setups, our consultancy services
                  bridge the gap between challenges and innovation.
                </p>
              </div>
              <Link to="/about" className="home__services__btn">
                View Products Range{" "}
                <BsArrowRightCircleFill className="home__services__btn__icon" />
              </Link>
            </div>
            <div className="home__services__card">
              <img src={softwaredevelopmentcard} alt="" />
              <div className="home__services__card__content">
                <h1>
                  {" "}
                  Software Solutions that <br /> Redefine Possibilities
                </h1>
                <p>
                  Embrace the future with our innovative software tools.
                  Seamlessly interface real-time data with intuitive interfaces,
                  unlocking insights that drive your decisions and strategies.
                </p>
              </div>
              <Link to="/about" className="home__services__btn">
                View Products Range{" "}
                <BsArrowRightCircleFill className="home__services__btn__icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="home__sustainability__section">
          <div className="home__sustainability__content__wrapper">
            <div className="home__sustainability__content">
              <h1>Sustaibility</h1>
              <p>
                At Advance Analytik, we are committed to driving sustainability
                and environmental responsibility in everything we do. We believe
                that businesses have a crucial role to play in preserving our
                planet for future generations. That's why we offer sustainable
                solutions and promote eco-friendly practices to help our clients
                achieve their sustainability goals. Our approach to
                sustainability encompasses green technology, resource
                optimization, environmental compliance, and collaboration for
                impactful change. By embracing these principles, we empower
                businesses to make a positive impact on the planet while
                achieving their operational goals.
              </p>
            </div>
            <div className="home__sustainability__img__wrapper">
              <motion.img
                src={sustainability}
                alt="sustainability"
                variants={slideUpVariants}
                transition={{ delay: 1 }}
              />
            </div>
          </div>
        </div>
        <div className="home__cp__download__btn__section">
          <Link to="/contact" className="home__cp__card">
            <FaStarOfLife className="home__cp__card__icon" />
            <p>
              Reach out to us and experience the power of precision analysis.
              Let's discuss how our solutions can elevate your goals.
            </p>
            <span className="home__cp__card__link">
              Let's Connect{" "}
              <FiArrowUpRight className="home__cp__card__link__icon" />
            </span>
          </Link>
          <Link className="home__cp__card">
            <FaStarOfLife className="home__cp__card__icon" />
            <p>
              Explore our world of advanced analytical solutions. Download our
              profile to discover how we drive innovation in industries.
            </p>
            <a href="/" className="home__cp__card__link">
              Download Profile{" "}
              <FiDownload className="home__cp__card__link__icon" />
            </a>
          </Link>
        </div>
        <HomeBlogSlider />
      </motion.div>
    </div>
  );
};

export default Home;
