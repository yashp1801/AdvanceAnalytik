import { useEffect } from "react";
import "./Career.scss";
import careerheaderunderline from "./careerheaderunderline.png";
import careersImg from "./careersImg.jpg";
import data from "./jobOpenings";
import { Link } from "react-router-dom";
import { BiTime, BiCurrentLocation } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import Faq from "./Faq";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career">
      <div className="careers__header">
        <div className="careers__header__title">
          <h1>Careers</h1>
          <img src={careerheaderunderline} alt="img" />
        </div>
        <p>
          Learn more about the company and the team behind it. We are hiring!
          Join us.
        </p>
      </div>
      <div className="careers__page__sections__wrapper">
        <div className="careers__section__one">
          <h1>Shape the Future of Analytical Science with Us.</h1>
          <p>
            At Advance Analytik, we believe that our team is the driving force
            behind our success. We are constantly seeking talented individuals
            who are passionate about analytical excellence and eager to make a
            meaningful impact in the field of scientific analysis. Join us and
            embark on a rewarding journey that combines innovation,
            collaboration, and professional growth.
          </p>
          <img src={careersImg} alt="" />
        </div>
        <div className="careers__section__two">
          <h1>Open Positions</h1>
          <p>
            Join our team, drive innovation, and make a meaningful impact in
            analytical excellence. Explore exciting roles, apply today, and
            shape the future with Advance Analytik.
          </p>
          <div className="careers__section__two__jobportal__cards__wrapper">
            {data.map((item) => {
              return (
                <div
                  className="careers__section__two__jobportal__card"
                  key={item.id}
                >
                  <div className="careers__section__two__jobportal__card__content__wrapper">
                    <p>{item.category}</p>
                    <h1>{item.title}</h1>
                    <div className="careers__section__two__jobportal__card__footertags__wrapper">
                      <div className="careers__section__two__jobportal__card__footertag">
                        <BiTime className="careers__section__two__jobportal__card__footertag__icon" />
                        <span>{item.workTime}</span>
                      </div>
                      <div className="careers__section__two__jobportal__card__footertag">
                        <BiCurrentLocation className="careers__section__two__jobportal__card__footertag__icon" />
                        <span>{item.workLocation}</span>
                      </div>
                    </div>
                  </div>
                  <div className="careers__section__two__jobportal__card__portalLink__wrapper">
                    <Link
                      className="careers__section__two__jobportal__card__portalLink"
                      to={item.portalLink}
                      target="_blank"
                    >
                      View job
                      <FiArrowUpRight
                        className="careers__section__two__jobportal__card__portalLink__icon
                    "
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="careers__section__three">
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Career;
