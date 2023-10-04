import { useEffect, useState } from "react";
import "./Contact.scss";
import heroImg from "./contactheroimg.png";
import { RiChatSmile3Line } from "react-icons/ri";
import { IoChatbubblesOutline, IoCallOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import LocationMarker from "./LocationMap";
import formImg from "./fromImg.jpg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <img src={heroImg} alt="" className="contact__header__img" />
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
        {/*         */}
        <div className="contact__card">
          <IoChatbubblesOutline className="contact__card__icon" />
          <div className="contact__card__content">
            <h2>Chat to support</h2>
            <p>We are here to help.</p>
            <span>info@advanceanalytik.com</span>
          </div>
        </div>
        <div className="contact__card">
          <LuMapPin className="contact__card__icon" />
          <div className="contact__card__content">
            <h2>Visit us</h2>
            <span>
              Advance Analytik KFT <br /> 1024, Keleti Karoly utca 48. fszt.
              Budapest
            </span>
          </div>
        </div>
        <div className="contact__card">
          <IoCallOutline className="contact__card__icon" />
          <div className="contact__card__content">
            <h2>Call us</h2>
            <p>Mon-Fri from 10am to 7pm</p>
            <span>+36 70328 6862</span>
          </div>
        </div>
      </div>
      <div className="contact__map__wrapper">
        <h1>Discover Our Global Presence </h1>
        <p>
          Advance Analytik is proud to serve clients around the world with our
          cutting-edge analytical solutions. With a strong global presence,
          we've strategically established locations in key regions to provide
          timely and efficient support to our valued customers
        </p>
        <LocationMarker />
      </div>
      <div className="contact__enquiry__form__container">
        <img src={formImg} alt="" />
        <div className="contact__enquiry__form__wrapper">
          <h1>Enquiry Form</h1>
          <p>
            Have a question or need more information? Fill out the form below,
            and our team will get in touch with you shortly.
          </p>
          <form
            action="https://formsubmit.co/sales@advanceanalytik.com"
            method="POST"
            className="contact__enquiry__form"
          >
            <input type="text" name="name" required placeholder="Your Name" />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <input
              type="number"
              name="number"
              required
              placeholder="Contact Number"
            />
            <textarea
              type="hidden"
              name="enquiry"
              required
              placeholder="Enquiry"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
