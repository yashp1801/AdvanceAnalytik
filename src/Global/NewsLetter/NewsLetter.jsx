import React from "react";
import "./NewsLetter.scss";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__container__content">
          <h1>Subscribe for Updates & Insights -</h1>
          <p>
            Stay updated with our latest insights, product releases, and event
            invitations. Subscribe to our newsletter!
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
    </div>
  );
};

export default NewsLetter;
