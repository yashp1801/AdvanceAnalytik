import { useEffect } from "react";
import headerImg from "./headerImg.jpg";
import "./PrivacyPolicy.scss";
import { GoDotFill } from "react-icons/go";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legalpages">
      <div className="legalpages__header">
        <img src={headerImg} alt="" />
        <h1>Terms Of Use</h1>
      </div>
      <div className="legalpages__container">
        <p>
          Last updated: 20-08-2023 <br /> Please read these Terms of Use
          ("Terms") carefully before using www.advanceanalytik.com operated by
          Advance Analytik we. <br /> Your access to and use of the Site is
          conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, users, and others who access or use
          the Site. <br /> By accessing or using the Site, you agree to be bound
          by these Terms. If you disagree with any part of the Terms, then you
          may not access the Site.
        </p>
        <h2>
          {" "}
          <GoDotFill /> Intellectual Property
        </h2>
        <p>
          The Site and its original content, features, and functionality are
          owned by Advance Analytik and are protected by international
          copyright, trademark, patent, trade secret, and other intellectual
          property or proprietary rights laws.
        </p>
        <h2>
          {" "}
          <GoDotFill /> Links To Other Web Sites
        </h2>
        <p>
          Our Site may contain links to third-party web sites or services that
          are not owned or controlled by Advance Analytik. <br /> Advance
          Analytik has no control over and assumes no responsibility for, the
          content, privacy policies, or practices of any third-party web sites
          or services. You further acknowledge and agree that Advance Analytik
          shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with
          use of or reliance on any such content, goods, or services available
          on or through any such web sites or services.
        </p>
        <h2>
          {" "}
          <GoDotFill /> Termination
        </h2>
        <p>
          We may terminate or suspend access to our Site immediately, without
          prior notice or liability, for any reason whatsoever, including
          without limitation if you breach the Terms.
        </p>
        <h2>
          {" "}
          <GoDotFill /> Governing Law
        </h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of country, without regard to its conflict of law provisions.
        </p>
        <h2>
          {" "}
          <GoDotFill /> Changes
        </h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 30 days' notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion.
        </p>
        <h2>
          {" "}
          <GoDotFill /> Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please{" "}
          <a href="/contact"> contact us.</a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
