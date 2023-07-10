import { useState, useEffect } from "react";
import "./Products.scss";
import products from "./productsData";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [productId, setProductId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products based on the active tab
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  // Handle click on View Details button
  const handleClick = (productId) => {
    setProductId(productId);
    navigate("/products/selectedproduct", { state: { productId } });
  };

  return (
    <div className="products__wrapper">
      <div className="products__header__wrapper">
        <h1> Products</h1>
        <p>Discover the Perfect Products for Your Every Need!</p>
      </div>
      <div className="tabs">
        <button
          className={activeTab === "All" ? "active" : ""}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={activeTab === "Sensors" ? "active" : ""}
          onClick={() => setActiveTab("Sensors")}
        >
          Sensors
        </button>
        <button
          className={activeTab === "Controllers" ? "active" : ""}
          onClick={() => setActiveTab("Controllers")}
        >
          Controllers
        </button>
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.productId}>
            <img src={product.img} alt="img" className="product__item__img" />
            <div className="product__btn__name__wrapper">
              <p>{product.name}</p>
              <button onClick={() => handleClick(product.productId)}>
                View Details{" "}
                <RiArrowDropRightLine className="product__card__btn__icon" />{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
