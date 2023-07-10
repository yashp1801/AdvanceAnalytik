import { useEffect } from "react";
import products from "./productsData";
import { MdKeyboardArrowLeft } from "react-icons/md";
// import MadeInHungary from "./MadeHungary.png";
import { useLocation, useNavigate } from "react-router-dom";

import "./Products.scss";

const SelectedProductPopup = ({ setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = location.state;

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
  return (
    <div className="selectedproductpopup">
      <div className="selectedproductpopup__container">
        <div className="selectedproductpopup__container__wrapper">
          <div className="selectedproductpopup__header">
            <h1>{selectedProduct.name}</h1>
            <button onClick={handleClick}>
              {" "}
              <MdKeyboardArrowLeft className="selectedproductpopup__header__btn__icon" />{" "}
              Back
            </button>
          </div>
          <div className="selectedproductpopup__content__wrapper">
            <div className="selectedproductpopup__content__img__wrapper">
              <img src={selectedProduct.img} alt="img" />
              {/* <img
                className="selectedproductpopup__content__madeImg"
                src={MadeInHungary}
                alt=""
              /> */}
            </div>
            <div className="selectedproductpopup__content__introduction__wrapper">
              <h2>Introduction</h2>
              <p>{selectedProduct.introduction}</p>
            </div>
          </div>
          {selectedProduct.features ? (
            <div className="selectedproductpopup__features__wrapper">
              <h3>Features</h3>
              {selectedProduct?.features?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </div>
          ) : null}
          <div className="selectedproductpopup__specifictions__wrapper">
            <h4> Technical Specification</h4>
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
          {selectedProduct.subImg ? (
            <div className="selectedproductpopup__subImg__wrapper">
              <img src={selectedProduct.subImg} alt="diagram" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SelectedProductPopup;
