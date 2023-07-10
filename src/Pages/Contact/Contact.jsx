import React from "react";
import "./Contact.scss";
import heroImg from "./contactheroimg.png";
import { RiChatSmile3Line } from "react-icons/ri";
import { IoChatbubblesOutline, IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="contact">
      <img src={heroImg} alt="" />
      <div className="contact__header">
        <h1>Get in touch with us</h1>
        <p>Let us know how we can help!</p>
      </div>
      <div className="contact__card__wrapper">
        <div className="contact__card">
          <RiChatSmile3Line className="contact__card__icon" />
          <div className="contact__card__content">
            <h2>Chat to sales</h2>
            <p>Speak to out friendly team.</p>
            <span>sales@advanceanalytik.com</span>
          </div>
        </div>
        <div className="contact__card">
          <IoChatbubblesOutline className="contact__card__icon" />
          <div className="contact__card__content">
            <h2>Chat to support</h2>
            <p>We are here to help.</p>
            <span>support@advanceanalytik.com</span>
          </div>
        </div>
        <div className="contact__card">
          <LuMapPin className="contact__card__icon" />
          <div className="contact__card__content">
            <h2>Visit us</h2>
            <p>Visit our office HQ.</p>
            <span>View on Google Maps</span>
          </div>
        </div>
        <div className="contact__card">
          <IoCallOutline className="contact__card__icon" />
          <div className="contact__card__content">
            <h2>Call us</h2>
            <p>Mon-Fri from 10am to 7pm</p>
            <span>+36 70 328 6139</span>
          </div>
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
