import React from "react";
import marketData from "./marketData";
import { useParams } from "react-router-dom";
import BgImg from "./industry.jpg";
import "./Market.scss";
import Img from "./images/PulpandPaper.jpg";

const Market = () => {
  const { marketName } = useParams();
  const market = marketData.find((market) => market.route === marketName);

  if (!market) {
    return <div>Market not found</div>;
  }

  return (
    <div className="market">
      <div className="market__header">
        <div className="market__header__title">
          <h1>{market.name}</h1>
          <h2>{market.tagline}</h2>
        </div>
        <img src={BgImg} alt="" className="market__header__bgImg" />
      </div>
      <div className="market__des">
        <p>{market.des1}</p>
        <p>{market.des2}</p>
      </div>
      <div className="market__img__des__wrapper">
        <img src={market.img} alt="" />
        <p>{market.des3}</p>
      </div>
      <div className="market__des">
        <p>{market.des4}</p>
      </div>
    </div>
  );
};

export default Market;
