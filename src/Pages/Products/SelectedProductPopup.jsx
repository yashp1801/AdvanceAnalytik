import React, { useEffect, useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import products from "./productsData";
// import MadeInHungary from "./MadeHungary.png";
import { useLocation, useNavigate } from "react-router-dom";
import RequestQuotePopup from "./Components/RequestQuotePopup";

import "./Products.scss";

const SelectedProductPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = location.state;
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  const handleClick = () => {
    navigate("/products");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the product that matches the productId
  const selectedProduct = products.find(
    (product) => product.productId === productId
  );

  if (!selectedProduct) {
    // Handle the case when the product is not found
    return <div>Product not found!</div>;
  }

  return (
    <div className="selectedproductpopup">
      <div className="selectedproductpopup__container">
        <div className="selectedproductpopup__header">
          <h1> ADVANCE ANALYTIK {selectedProduct.name}</h1>
        </div>
        <div className="selectedproductpopup__content__wrapper">
          <div className="selectedproductpopup__content__img__wrapper">
            <img src={selectedProduct.img} alt="img" />
          </div>
          <div className="selectedproductpopup__content__introduction__wrapper">
            <p>{selectedProduct.introduction}</p>
            <div className="selectedproductpopup__content__introduction__btn__wrapper">
              <a
                href="/"
                className="selectedproductpopup__content__introduction__wrapper__dataSheet__download__btn"
              >
                Data Sheet
              </a>
              <a
                onClick={() => setIsOpen(true)}
                className="selectedproductpopup__content__introduction__wrapper__dataSheet__download__btn"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
        <div className="selectedproductpopup__tab__buttons">
          <button
            onClick={() => setActiveTab("features")}
            className={activeTab === "features" ? "active" : ""}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab("specifications")}
            className={activeTab === "specifications" ? "active" : ""}
          >
            Technical Specifications
          </button>
        </div>
        {activeTab === "features" && (
          <div className="selectedproductpopup__features__wrapper">
            {selectedProduct?.features?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </div>
        )}
        {activeTab === "specifications" && (
          <div className="selectedproductpopup__specifictions__wrapper">
            <table>
              <tbody>
                {selectedProduct?.attributes?.map((attribute, index) => (
                  <tr key={index}>
                    <td>{attribute.name}</td>
                    <td>{attribute.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedProduct.subImg && (
          <div className="selectedproductpopup__subImg__wrapper">
            <img src={selectedProduct.subImg} alt="diagram" />
          </div>
        )}
      </div>
      {isOpen && (
        <RequestQuotePopup
          setIsOpen={setIsOpen}
          selectedProduct={selectedProduct.name}
        />
      )}
    </div>
  );
};

export default SelectedProductPopup;
