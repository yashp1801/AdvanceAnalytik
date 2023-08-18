import React from "react";
import marketData from "./marketData";
import { useParams, Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "./Market.scss";

const Market = () => {
  const { marketName } = useParams();
  const market = marketData.find((market) => market.route === marketName);

  if (!market) {
    return <div>Market not found</div>;
  }

  return (
    <div className="market">
      <div className="market__header">
        <h1>{market.name}</h1>
      </div>
      <div className="markets__sections__wrapper">
        <div className="markets__section__one">
          <p>
            {" "}
            <FaStarOfLife className="markets__section__one__icon" />{" "}
            {market.des1}
          </p>
          <p>{market.des2}</p>
        </div>
        <div className="markets__section__two">
          <img src={market.img} alt="" />
          <div className="markets__section__two__content__wrapper">
            <p>{market.des3}</p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="markets__section__two__content__link"
            >
              View Products Range <FiArrowUpRight className="markets__section__two__content__link__icon" />
            </Link>
          </div>
        </div>
        <div className="market__des">
          <p>{market.des4}</p>
        </div>
      </div>
    </div>
  );
};

export default Market;
