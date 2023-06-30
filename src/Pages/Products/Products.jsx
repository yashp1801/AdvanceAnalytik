import React, { useState } from "react";
import productsData from "./productsData";
import "./Products.scss";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDetailsModal = (product) => {
    setSelectedProduct(product);
  };

  const closeDetailsModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      {productsData.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <h3 className="product-name">{product.name}</h3>
          <button
            className="more-details-button"
            onClick={() => openDetailsModal(product)}
          >
            More Details
          </button>
        </div>
      ))}

      {selectedProduct && (
        <div className="product__details__modal">
          <div className="product__details">
            <div className="product__header">
              <h1>{selectedProduct.name}</h1>
              <button className="close-button" onClick={closeDetailsModal}>
                Close
              </button>
            </div>
            <div className="product__details__content">
              <div className="product__details__content__image__wrapper">
                <img
                  className="product-details-image"
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
              </div>
              <p>{selectedProduct.details}</p>
            </div>
            <div className="product__details__description">
              <h3>Features:</h3>
              <ul className="product-features">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h3>Specifications:</h3>
              <table className="product-specifications">
                <tbody>
                  {Object.entries(selectedProduct.specifications).map(
                    ([key, value]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
