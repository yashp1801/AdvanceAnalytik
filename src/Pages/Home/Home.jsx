import React from "react";
import "./Home.scss";
import HeroSlider from "./Components/HeroSlider";

const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <div className="home__header">
        <h1 className="home__title">Welcome to Advance Analytik</h1>
        <p className="home__subtitle">
          Revolutionizing Online Monitoring Solutions
        </p>
      </div>
      <div className="home__content">
        <p className="home__description">
          At Advance Analytik, we specialize in providing state-of-the-art
          online monitoring solutions for industries across the globe. Our
          advanced technologies enable real-time data acquisition, precise
          measurements, and comprehensive analysis, empowering businesses to
          optimize their processes, ensure compliance, and drive operational
          efficiency.
        </p>
        <div className="home__product-list">
          <h2 className="home__product-list-title">
            Cutting-Edge Monitoring Technologies for Every Industry
          </h2>
          <ul className="home__product-list-items">
            <li className="home__product-list-item">pH Meters</li>
            <li className="home__product-list-item">ORP Meters</li>
            <li className="home__product-list-item">TDS Meters</li>
            <li className="home__product-list-item">Turbidity Meters</li>
            <li className="home__product-list-item">COD/BOD/TSS Analyzers</li>
            <li className="home__product-list-item">Chlorine Meters</li>
            <li className="home__product-list-item">Conductivity Meters</li>
          </ul>
        </div>
        <p className="home__description">
          These instruments are built with the latest technology and
          industry-leading accuracy to deliver reliable and precise monitoring
          results.
        </p>
        <div className="home__tailored-solutions">
          <h2 className="home__tailored-solutions-title">
            Tailored Solutions for Your Industry
          </h2>
          <p className="home__description">
            We understand that every industry has unique monitoring
            requirements. That's why we provide customized solutions that are
            specifically tailored to meet the challenges and demands of your
            industry. Whether you operate in the pulp and paper sector,
            distilleries, power plants, or any other industry, our team of
            experts will work closely with you to deliver the right monitoring
            solution that aligns with your goals and regulatory compliance
            needs.
          </p>
        </div>
        <div className="home__partnering">
          <h2 className="home__partnering-title">Partnering for Success</h2>
          <p className="home__description">
            At Advance Analytik, we believe in building strong partnerships with
            our clients. We work closely with you to understand your specific
            needs, challenges, and goals. Our team of experts provides
            comprehensive support, from initial consultation and product
            selection to installation, training, and ongoing technical
            assistance. We are committed to your success and strive to be your
            trusted partner in achieving excellence through advanced monitoring
            solutions.
          </p>
        </div>
        <div className="home__empowering">
          <h2 className="home__empowering-title">Empowering Your Business</h2>
          <p className="home__description">
            By choosing Advance Analytik, you gain access to cutting-edge
            monitoring technologies that empower your business to make
            data-driven decisions, optimize processes, and drive efficiency. Our
            intuitive interfaces, advanced analytics, and real-time monitoring
            capabilities provide you with the insights needed to stay ahead in a
            competitive landscape. Experience the power of our solutions and
            unlock new levels of productivity, quality, and compliance for your
            business.
          </p>
        </div>
      </div>
      <div className="home__contact">
        <h2 className="home__contact-title">Contact Us Today</h2>
        <p className="home__description">
          Ready to take your monitoring capabilities to the next level? Contact
          us today to discuss your specific requirements and discover how our
          advanced monitoring solutions can benefit your business. Our dedicated
          team is ready to assist you and provide the right solutions to meet
          your needs. Experience the future of online monitoring with Advance
          Analytik.
        </p>
      </div>
    </div>
  );
};

export default Home;
