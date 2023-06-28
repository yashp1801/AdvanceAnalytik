import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h1>Get in touch with us</h1>
        <p>
          Thank you for your interest in Advance Analytik! We value your
          inquiries, feedback, and collaboration opportunities. We encourage you
          to reach out to us using the contact information provided below. Our
          dedicated team is ready to assist you and provide the information you
          need.
        </p>
      </div>
      <div className="contact__details__map__wrapper">
        <div className="contact__details">
          <h2>Contact Information</h2>
          <h3>Address</h3>
          <p>Advance Analytik KFT 1024,</p>
          <p>Budapest, Keleti Karoly utca 48.</p>
          <p>fszt.</p>
          <p>Hungary</p>
          <h3>Phone Number</h3>
          <p>+36 70 328 6139</p>
          <h3>Email</h3>
          <p>SALES@ADVANCEANALYTIK.COM</p>
        </div>
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2694.867479030365!2d19.023316682036544!3d47.51197198530745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAdvance%20Analytik%20KFT%201024%2C%20Budapest%2C%20Keleti%20Karoly%20utca%2048.%20fszt.!5e0!3m2!1sen!2sin!4v1687862057656!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact__content__cards__wrapper">
        <div className="contact__content__card">
          <h4>Sales Inquiries</h4>
          <p>
            For sales-related inquiries, product information, or to request a
            quote, please contact our Sales team at [Sales Email Address] or
            call [Sales Phone Number]. Our sales representatives are
            knowledgeable and responsive, and they will be delighted to assist
            you in finding the best monitoring solutions for your specific
            requirements.
          </p>
        </div>
        <div className="contact__content__card">
          <h4>Customer Support</h4>
          <p>
            If you are an existing customer and require technical support,
            troubleshooting assistance, or have any product-related questions,
            please reach out to our Customer Support team at [Support Email
            Address] or call [Support Phone Number]. Our dedicated support staff
            is available to ensure your satisfaction and provide prompt
            resolutions to any issues you may encounter.
          </p>
        </div>
        <div className="contact__content__card">
          <h4>General Inquiries</h4>
          <p>
            For general inquiries, partnership opportunities, media inquiries,
            or any other non-sales or support related matters, please contact us
            at [General Inquiries Email Address] or call [General Inquiries
            Phone Number]. We value your interest and look forward to hearing
            from you. Our team will respond to your inquiry as soon as possible.
          </p>
        </div>
        <div className="contact__content__card">
          <h4>Visit Us</h4>
          <p>
            If you would like to visit our facility, schedule a product
            demonstration, or meet with our team in person, please coordinate in
            advance by contacting us through one of the provided contact
            methods. We will be delighted to welcome you and provide a
            personalized experience that showcases our advanced monitoring
            technologies.
          </p>
        </div>
      </div>
      <p className="contact__footer">
        We appreciate your interest in Advance Analytik, and we strive to
        deliver exceptional customer service and support. We are committed to
        providing accurate and timely responses to all inquiries. Your
        satisfaction is our priority.
      </p>
    </div>
  );
};

export default Contact;
