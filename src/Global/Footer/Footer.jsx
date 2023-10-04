import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "./logo.png";
import NewsLetter from "../NewsLetter/NewsLetter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__newsletter__from__wrapper">
            <div className="footer__newsletter__form__content">
              <h1>Subscribe for Updates & Insights</h1>
              <p>
                Stay updated with our latest insights, product releases, and
                event invitations.
              </p>
            </div>
            <form
              action="https://formsubmit.co/info@advanceanalytik.com"
              method="POST"
              className="newsletter__form"
            >
              <input
                type="email"
                name="Email For Newsletter"
                required
                placeholder="Your email address"
              />

              <button type="submit">Suscribe</button>
            </form>
          </div>
          <div className="footer__content__wrapper">
            <div className="footer__logo__wrapper">
              <img src={logo} alt="" />
            </div>
            <div className="footer__content__quicklink">
              <ul>
                <Link>Home</Link>
                <Link>About us</Link>
                <Link>Contact</Link>
                <Link>Careers</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
