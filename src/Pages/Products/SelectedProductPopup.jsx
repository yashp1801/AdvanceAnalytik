import React, { useEffect, useState } from "react";
import products from "./productsData";
import { useLocation, useNavigate } from "react-router-dom";
import RequestQuotePopup from "./Components/RequestQuotePopup";
import { BsArrowRightShort } from "react-icons/bs";
import { PiDownloadSimple } from "react-icons/pi";
import "./Products.scss";

const SelectedProductPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = location.state;
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate("/products");
  };

  // Find the product that matches the productId

  const selectedProduct = products.find(
    (product) => product.productId === productId
  );

  if (!selectedProduct) {
    // Handle when products not found
    return <div>Product not found!</div>;
  }

  return (
    <div className="selectedproductpopup">
      <div className="selectedproductpopup__container">
        <div className="selectedproductpopup__content__wrapper">
          <div className="selectedproductpopup__content__img__wrapper">
            <img src={selectedProduct.img} alt="img" />
          </div>
          <div className="selectedproductpopup__content__introduction__wrapper">
            <div className="selectedproductpopup__content__introduction__content">
              <h1> {selectedProduct.name}</h1>
              <p>{selectedProduct.introduction}</p>
            </div>
            <div className="selectedproductpopup__content__introduction__btn__wrapper">
              <a
                href={selectedProduct.dataSheetLink}
                download={`${selectedProduct.name} Data Sheet`}
                className="selectedproductpopup__content__introduction__wrapper__dataSheet__download__btn"
              >
                Data Sheet{" "}
                <PiDownloadSimple className="selectedproductpopup__content__introduction__wrapper__dataSheet__download__btn__icon" />
              </a>
              <a
                onClick={() => setIsOpen(true)}
                style={{ backgroundColor: "#141414" }}
                className="selectedproductpopup__content__introduction__wrapper__dataSheet__download__btn"
              >
                Request quote{" "}
                <BsArrowRightShort className="selectedproductpopup__content__introduction__wrapper__dataSheet__download__btn__icon" />
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
      {/* More products range to be added */}
    </div>
  );
};

export default SelectedProductPopup;
