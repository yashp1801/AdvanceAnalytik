import { useState, useEffect } from "react";
import "../Products.scss";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import headerImg from "../productImages/productsHeaderImg.png";
import products from "../productsData";

const Sensors = () => {
  const [productId, setProductId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterControllers = products.filter(
    (product) => product.category === "Controllers"
  );


  // Handle click on View Details button
  const handleClick = (productId) => {
    setProductId(productId);
    navigate("/products/selectedproduct", { state: { productId } });
  };

  return (
    <div className="products__wrapper">
      <div className="products__header__wrapper">
        <img src={headerImg} alt="" />
        <div className="products__header__content__wrapper">
          <h1>Controllers</h1>
          <p>Discover the Perfect Products for Your Every Need!</p>
        </div>
      </div>
      <div className="products__container">
        <div className="products__sidebar">
          <Link to={"/products/analyzers"} className="products__sidebar__link">
            Analyzers
            <FiArrowUpRight />
          </Link>
          <Link
            to={"/products/controllers"}
            className="products__sidebar__link"
          >
            Controllers
            <FiArrowUpRight />
          </Link>
          <Link to={"/products/sensors"} className="products__sidebar__link">
            Sensors
            <FiArrowUpRight />
          </Link>
        </div>
        <div className="products">
          {filterControllers.map((product) => (
            <div className="product-item" key={product.productId}>
              <img src={product.img} alt="img" className="product__item__img" />
              <div className="product__btn__name__wrapper">
                <p>{product.name}</p>
                <button onClick={() => handleClick(product.productId)}>
                  View Details
                  <RiArrowDropRightLine className="product__card__btn__icon" />{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sensors;
