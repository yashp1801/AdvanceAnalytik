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
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slider-slide first">
          <video src={HomeVideo} autoPlay loop muted></video>
          <div className="slider-content">
            <h2>Welcome to Advance Analytik</h2>
            <p>Revolutionizing Online Monitoring Solutions</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img1} alt="" />
          <div className="slider-content">
            <h2>Engineering and Consultancy</h2>
            <p>
              We offer premium engineering and consultancy services to address
              intricate challenges, enhance efficiency, and fulfill your
              objectives. Our adept team provides custom innovative solutions to
              meet your specific requirements.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              View More Information{" "}
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
              We provide advanced analytical instrumentation solutions for
              precise measurements across various applications. From pH meters
              to spectrophotometers, our cutting-edge technologies support your
              analytical requirements.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              View More Information{" "}
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
              Our expert software development team crafts tailor-made solutions
              to optimize your processes, boost efficiency, and foster growth.
              By leveraging our industry knowledge and the latest technologies,
              we deliver dependable and scalable software products.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              View More Information{" "}
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
              Discover the realm of IoT through our diverse array of smart
              devices and solutions. Our IoT devices offer real-time data,
              seamless connectivity, and advanced features, empowering you to
              optimize your operations and achieve seamless automation.
            </p>
            <Link
              to={"/services/analyticalinstrumentation"}
              className="slider-content__link"
            >
              View More Information{" "}
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
              View Products{" "}
              <LuArrowUpRight className="slider-content__link__icon" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
