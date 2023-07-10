import React from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import "../Home.scss";

const HomeWhyUs = () => {
  return (
    <div className="home__whyus">
      <h1>Why Choose Advance Analytik?</h1>
      <p>
        Choose Advance Analytik for our cutting-edge technology, customized
        solutions, and comprehensive support that will empower you to achieve
        excellence in your analytical endeavors. Contact us today to discuss
        your analytical requirements and discover how we can partner with you to
        drive success.
      </p>
      <div className="home__whyus__card__wrapper">
        <div className="home__whyus__card">
          <GrTechnology className="home__whyus__card__icon" />
          <h2>01</h2>
          <h4>Cutting-edge Technology</h4>
          <p>
            We provide access to cutting-edge analytical instrumentation and
            software that leverage the latest advancements in technology. Our
            state-of-the-art instruments ensure accurate and precise analysis,
            empowering you to make informed decisions and drive innovation.
          </p>
        </div>

        <div className="home__whyus__card">
          <BiSupport className="home__whyus__card__icon" />
          <h2>03</h2>
          <img src="" alt="" />
          <h4>Comprehensive Support</h4>
          <p>
            At Advance Analytik, we believe in delivering not just high-quality
            instruments, but also comprehensive support throughout your
            analytical journey. Our dedicated team of experts is committed to
            assisting you at every step, from instrument selection and
            installation to method development, training, and ongoing technical
            support. We are here to ensure that you maximize the value of your
            analytical instrumentation and achieve accurate and reliable
            results.
          </p>
        </div>
        <div className="home__whyus__card">
          <AiOutlineSolution className="home__whyus__card__icon" />
          <h2>02</h2>
          <img src="" alt="" />
          <h4>Customized Solutions</h4>
          <p>
            We understand that every industry and research field has unique
            analytical requirements. That's why we offer customized solutions
            tailored to your specific needs. Our experienced team works closely
            with you to understand your challenges, recommend the most suitable
            instruments, and provide tailored solutions that optimize your
            analytical workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyUs;
