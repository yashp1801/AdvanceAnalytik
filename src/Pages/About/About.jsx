import { useEffect } from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import watertreatmentplantImg from "./images/watertreatmentplant.jpg";
import section2Img from "./images/section1.jpg";
import { MdHiking } from "react-icons/md";
import { GoTelescopeFill } from "react-icons/go";
import { BsHeadsetVr } from "react-icons/bs";
import { AiOutlineSolution } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about__page">
      <div className="about__page__container">
        <div className="about__header">
          <h1>
            Empowering Innovation through <br /> <span>Advanced</span>{" "}
            Analytics.
          </h1>
        </div>
        <div className="about__page__intro__wrapper">
          <img src={watertreatmentplantImg} alt="" />
          <div className="about__page__intro__content">
            <p>
              Welcome to Advance Analytik, a leading manufacturer of advanced
              analytical instrumentation solutions. We are dedicated to
              empowering industries, research laboratories, and scientific
              communities with cutting-edge technology, reliable instruments,
              and exceptional support. Our commitment to excellence drives us to
              deliver innovative solutions that enable precise analysis,
              informed decision-making, and transformative discoveries.
            </p>
            <Link className="about__page__intro__content__link" to={"/contact"}>
              Get in touch
            </Link>
          </div>
        </div>
        <div className="about__page__section__one__wrapper">
          <div className="about__page__section__one__card">
            <MdHiking className="about__page__section__one__card__content__card__icon" />
            <h2>Our Mission</h2>
            <p>
              Our mission is to be the preferred partner for analytical
              instrumentation needs, offering comprehensive solutions that
              address the unique challenges of various industries and research
              fields. We aim to provide exceptional customer support, tailored
              solutions, and continuous innovation to help our customers achieve
              their analytical goals and drive success.
            </p>
          </div>
          <div className="about__page__section__one__card">
            <GoTelescopeFill className="about__page__section__one__card__content__card__icon" />
            <h2>Our Vision</h2>
            <p>
              At Advance Analytik, our vision is to revolutionize the world of
              analytical science by providing state-of-the-art instruments,
              software, and services that empower our customers to unlock new
              possibilities. We strive to be at the forefront of technological
              advancements, consistently delivering reliable and accurate
              solutions that enhance scientific research, quality control, and
              process optimization.
            </p>
          </div>
        </div>
        <div className="about__page__section__two__wrapper">
          <h1>Why Choose Advance Analytik?</h1>
          <div className="about__page__section__two__content__wrapper">
            <div className="about__page__section__two__img__wrapper">
              <img src={section2Img} alt="" />
            </div>
            <div className="about__page__section__two__cards__wrapper">
              <div className="about__page__section__two__card">
                <BsHeadsetVr className="about__page__section__two__card__icon" />
                <div className="about__page__section__two__card__content">
                  <h3>Cutting-edge Technology</h3>
                  <p>
                    We leverage the latest advancements in analytical
                    instrumentation and software to provide our customers with
                    state-of-the-art solutions that deliver accurate and precise
                    results. Our commitment to staying at the forefront of
                    technology ensures that you have access to the most advanced
                    tools for your analytical needs.
                  </p>
                </div>
              </div>
              <div className="about__page__section__two__card">
                <AiOutlineSolution className="about__page__section__two__card__icon" />
                <div className="about__page__section__two__card__content">
                  <h3>Customized Solutions</h3>
                  <p>
                    We understand that every industry and research field has
                    unique requirements. That's why we offer customized
                    solutions tailored to your specific needs. Our experienced
                    team works closely with you to understand your challenges
                    and develop personalized solutions that optimize your
                    analytical workflows and drive success.
                  </p>
                </div>
              </div>
              <div className="about__page__section__two__card">
                <CgPerformance className="about__page__section__two__card__icon" />
                <div className="about__page__section__two__card__content">
                  <h3>Reliable Performance</h3>
                  <p>
                    We take pride in delivering instruments and solutions that
                    consistently deliver reliable performance. Our rigorous
                    quality control processes and adherence to industry
                    standards ensure that our products meet the highest levels
                    of accuracy, precision, and durability. You can rely on our
                    solutions to provide accurate data and enable informed
                    decision-making.
                  </p>
                </div>
              </div>
              <div className="about__page__section__two__card">
                <BiSupport className="about__page__section__two__card__icon" />
                <div className="about__page__section__two__card__content">
                  <h3>Exceptional Support and Service</h3>
                  <p>
                    Our dedicated team is committed to providing comprehensive
                    support throughout your analytical journey. From initial
                    consultations to installation, training, and ongoing
                    technical assistance, we are here to ensure that you have a
                    seamless experience and receive the guidance you need to
                    make the most of our products and services.
                  </p>
                </div>
              </div>
              <div className="about__page__section__two__card">
                <FaUserTie className="about__page__section__two__card__icon" />
                <div className="about__page__section__two__card__content">
                  <h3>Trusted Expertise</h3>
                  <p>
                    With years of experience in the analytical instrumentation
                    industry, we have developed a deep understanding of our
                    customers' needs and challenges. Our team of experts brings
                    extensive knowledge and expertise to every project,
                    providing you with trusted guidance, practical insights, and
                    innovative solutions that drive your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
