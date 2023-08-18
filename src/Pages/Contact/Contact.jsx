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
      <div className="contact__map__wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1347.4297040036317!2d19.028410710287044!3d47.51212916033205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dea7b89501cd%3A0x1e6991617f971428!2sBudapest%2C%20Keleti%20K%C3%A1roly%20u.%2C%20Hungary!5e0!3m2!1sen!2sin!4v1691751453151!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="contact__map"
        ></iframe>
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
