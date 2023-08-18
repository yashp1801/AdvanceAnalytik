import React from "react";
import "./SoftwareDevelopmentServices.scss";
import heroImg from "./productImages/softwaredevelopmentHeroImg.jpg";
import sdServiceSectionOneImg from "./productImages/sdServiceSectionOneImg.png";
import card3 from "./productImages/sdsectiontwocard3.png";
import card2 from "./productImages/sdsectiontwocard2.png";
import card1 from "./productImages/sdsectiontwocard1.png";

const SoftwareDevelopmentServices = () => {
  return (
    <div className="sd__service">
      <div className="sd__header">
        <img src={heroImg} alt="" />
        <h1 className="sd__hero__title">Software Development Solutions</h1>
      </div>
      <div className="sd__services__wrapper">
        <div className="sd__services__section__one">
          <div className="sd__services__section__one__content__wrapper">
            <h2>Custom Software Development</h2>
            <p>
              We develop tailor-made software solutions to meet the specific
              requirements of our clients. This involves understanding your
              business processes, designing and developing software applications
              from scratch, and ensuring they align with your goals and
              objectives.
            </p>
          </div>
          <div className="sd__services__section__one__img__wrapper">
            <img src={sdServiceSectionOneImg} alt="" />
          </div>
        </div>
        <div className="sd__services__section__two">
          <div className="sd__services__section__two__card">
            <img src={card1} alt="" />
            <div className="card__content__wrapper">
              <h1>Cutting-Edge Technologies</h1>
              <p>
                Our software development team keeps pace with the latest
                technologies to deliver cutting-edge solutions. Whether it's web
                applications, mobile apps, data analytics platforms, or
                automation software, we leverage technologies like AI, machine
                learning, cloud computing, and IoT to create solutions that
                empower your business for the digital age.
              </p>
            </div>
          </div>
          <div className="sd__services__section__two__card">
            <img src={card2} alt="" />
            <div className="card__content__wrapper">
              <h1>Seamless Integration</h1>
              <p>
                We understand the importance of a seamless software ecosystem.
                Our development process focuses on creating software that
                integrates seamlessly with your existing systems, ensuring a
                smooth transition and minimal disruption to your operations.
                This approach enhances efficiency and productivity across your
                organization.
              </p>
            </div>
          </div>
          <div className="sd__services__section__two__card">
            <img src={card3} alt="" />
            <div className="card__content__wrapper">
              <h1>Agile Development Approach</h1>
              <p>
                We follow an agile development methodology that allows us to
                adapt to changing requirements and deliver results in
                iterations. This approach fosters collaboration, transparency,
                and ensures that the final software meets your expectations
                while being delivered on time and within budget.
              </p>
            </div>
          </div>
        </div>

        <div className="process-container">
          <h1>Our Software Development Process</h1>
          <div className="process-step">
            <h2>Discovery and Planning</h2>
            <p>
              We start by understanding your business needs and goals. We plan
              the software's architecture, features, and development milestones.
            </p>
          </div>
          <div className="process-step">
            <h2>Design</h2>
            <p>
              Our design team creates user-friendly interfaces that are visually
              appealing and intuitive to use.
            </p>
          </div>
          <div className="process-step">
            <h2>Development</h2>
            <p>
              Our expert developers bring the design to life, coding the
              software's functionality.
            </p>
          </div>
          <div className="process-step">
            <h2>Testing and Quality Assurance</h2>
            <p>
              We rigorously test the software to ensure its performance,
              security, and functionality meet the highest standards.
            </p>
          </div>
          <div className="process-step">
            <h2>Deployment and Support</h2>
            <p>
              Once the software is ready, we deploy it and provide ongoing
              support to ensure its optimal performance.
            </p>
          </div>
        </div>
      </div>
      {/* Add more services here */}
    </div>
  );
};

export default SoftwareDevelopmentServices;
