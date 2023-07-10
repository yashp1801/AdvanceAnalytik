import React from "react";
import "./SoftwareDevelopmentServices.scss";
import heroImg from "./productImages/softwaredevelopmentHeroImg.jpg";

const SoftwareDevelopmentServices = () => {
  return (
    <div className="software-development-services">
      <div className="career-page-header">
        <img src={heroImg} alt="" />
        <div className="career__page__hero__content">
          <h2 className="career-page__title">Software Development Services</h2>
          <p className="career-page__description">
            Advance Analytik offers a wide range of software development
            services tailored to meet your specific needs. We specialize in
            custom software development, web and mobile app development,
            e-commerce solutions, quality assurance, maintenance and support,
            cloud computing, and integration services. With our expertise, we
            deliver high-quality software solutions that drive business growth
            and success.
          </p>
        </div>
      </div>
      <div className="services__wrapper">
        <div className="service">
          <h2>Custom Software Development</h2>
          <p>
            We develop tailor-made software solutions to meet the specific
            requirements of our clients. This involves understanding your
            business processes, designing and developing software applications
            from scratch, and ensuring they align with your goals and
            objectives.
          </p>
        </div>
        <div className="service">
          <h2>Web Application Development</h2>
          <p>
            We specialize in building robust and scalable web applications using
            modern technologies and frameworks. Whether you need a simple
            website or a complex enterprise-level web application, we have the
            expertise to deliver high-quality solutions.
          </p>
        </div>
        <div className="service">
          <h2>Mobile App Development</h2>
          <p>
            Our team of experienced mobile app developers can create intuitive
            and feature-rich applications for both iOS and Android platforms. We
            follow best practices and leverage the latest mobile technologies to
            deliver user-friendly and high-performance mobile apps.
          </p>
        </div>
      </div>
      {/* Add more services here */}
    </div>
  );
};

export default SoftwareDevelopmentServices;
