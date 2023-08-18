import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Img1 from "../images/engineering.jpg";
import Img2 from "../images/analyticalInstrumentationImg.jpg";
import Img3 from "../images/softwaredevelopment.jpg";
import Img4 from "../images/iot.jpg";
import HomeVideo from "../images/water_treatment.mp4";
import Img5 from "../images/products.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Home.scss";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      grabCursor={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slider__slide__first">
          <video src={HomeVideo} autoPlay loop muted></video>
          <div className="slider__first__slide__content">
            <h2>Welcome to Advance Analytik</h2>
            <p>Revolutionizing Online Monitoring Solutions</p>
            <Link to={"/about"} className="slider-content__button">
              Get Started
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img1} alt="" />
          <div className="slider-content">
            <h2>Engineering and Consultancy</h2>
            <p>
              We offer top-notch engineering & consultancy for complex
              challenges, ensuring tailored solutions for your goals.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              More Information{" "}
              <LuArrowUpRight className="slider-content__link__icon" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img2} alt="" />
          <div className="slider-content">
            <h2>Analytical Instrumentation</h2>
            <p>
              We offer precise analytical solutions across applications, with
              advanced instruments like pH meters and spectrophotometers to meet
              your needs.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              More Information{" "}
              <LuArrowUpRight className="slider-content__link__icon" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img3} alt="" />
          <div className="slider-content">
            <h2>Software Development</h2>
            <p>
              Our skilled software team creates custom solutions to enhance
              processes, efficiency, and growth. Leveraging industry expertise
              and cutting-edge tech, we deliver reliable, scalable software.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              More Information{" "}
              <LuArrowUpRight className="slider-content__link__icon" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img4} alt="" />
          <div className="slider-content">
            <h2>Industrial IOT Solutions</h2>
            <p>
              Explore IoT with our smart devices and solutions. Experience
              real-time data, seamless connectivity, and advanced features for
              optimized operations and automation.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              More Information{" "}
              <LuArrowUpRight className="slider-content__link__icon" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img5} alt="" />
          <div className="slider-content">
            <h2>Products That Power Precision Analysis</h2>
            <p>
              Explore our comprehensive range of cutting-edge instruments for
              accurate and reliable analysis.
            </p>
            <Link to={"/products"} className="slider-content__link">
              View Products Range{" "}
              <LuArrowUpRight className="slider-content__link__icon" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
