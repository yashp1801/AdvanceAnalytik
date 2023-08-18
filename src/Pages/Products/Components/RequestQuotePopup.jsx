import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { TiStarburst } from "react-icons/ti";
import "../Products.scss";

const RequestQuotePopup = ({ selectedProduct, setIsOpen }) => {
  return (
    <div className="requestQuote__popup">
      <div className="requestQuote__popup__container">
        <div className="requestQuote__popup__header__wrapper">
          <h1>
            <TiStarburst className="requestQuote__popup__header__title__icon" />{" "}
            Request a Quote
          </h1>
          <RiCloseCircleFill
            className="requestQuote__popup__header__closeBtn"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <p>
          Please fill out the information below to request a quote for the
          selected product. Our team will get back to you as soon as possible
          with the pricing details and any additional information you may need.
        </p>
        <h2>Product Name - {selectedProduct}</h2>
        <div className="requestQuote__popup__form__wrapper">
          <div className="requestQuote__popup__form__input__wrapper">
            <span>Full Name *</span>
            <input type="text" required />
          </div>
          <div className="requestQuote__popup__form__input__wrapper">
            <span>Company Name</span>
            <input type="text" />
          </div>
          <div className="requestQuote__popup__form__input__wrapper">
            <span>E mail *</span>
            <input type="text" />
          </div>
          <div className="requestQuote__popup__form__input__wrapper">
            <span>Phone Number *</span>
            <input type="text" />
          </div>
        </div>
        <div className="requestQuote__popup__af__textarea__wrapper">
          <span>Additional Information</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <p style={{ color: " rgb(194, 3, 3)", fontWeight: "600" }}>
          Please note that this is a preliminary quote request. Our team will
          review your information and provide you with a detailed quote
          including pricing, shipping, and any other relevant details.
        </p>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default RequestQuotePopup;
