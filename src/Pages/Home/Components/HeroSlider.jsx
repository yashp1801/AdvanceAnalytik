import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Img1 from "../images/engineering.jpg";
import Img2 from "../images/analyticalInstrumentationImg.jpg";
import Img3 from "../images/softwaredevelopment.jpg";
import Img4 from "../images/iot.jpg";

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
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img1} alt="" />
          <div className="slider-content">
            <h2>Engineering and Consultancy Services</h2>
            <p>
              We provide top-notch engineering and consultancy services to help
              businesses solve complex problems, optimize their operations, and
              achieve their goals. Our team of experts is dedicated to
              delivering innovative solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img2} alt="" />
          <div className="slider-content">
            <h2>Analytical Instrumentation</h2>
            <p>
              Our cutting-edge analytical instrumentation solutions enable
              precise and accurate measurements for a wide range of
              applications. From pH meters to spectrophotometers, we offer
              advanced technologies to support your analytical needs.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img3} alt="" />
          <div className="slider-content">
            <h2>Software Development</h2>
            <p>
              Our skilled software development team creates custom software
              solutions to streamline your processes, enhance efficiency, and
              drive growth. We combine industry expertise with the latest
              technologies to deliver reliable and scalable software products.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-slide">
          <img src={Img4} alt="" />
          <div className="slider-content">
            <h2>IOT Devices</h2>
            <p>
              Explore the world of IoT with our range of smart devices and
              solutions. We offer IoT devices that provide real-time data,
              connectivity, and advanced features to optimize your operations
              and enable seamless automation.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
