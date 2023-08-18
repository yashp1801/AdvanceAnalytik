import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import img1 from "../images/blog1.png";
import img2 from "../images/blog2.jpg";
import img3 from "../images/blog3.jpg";
import img4 from "../images/blog4.jpg";
import img5 from "../images/blog5.png";
import img6 from "../images/blog6.jpg";
import img7 from "../images/blog7.jpg";
import img8 from "../images/blog8.jpg";
import img9 from "../images/blog9.jpg";
import img10 from "../images/blog10.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRightShort } from "react-icons/bs";

import "../Home.scss";

const BlogData = [
  {
    id: 1,
    img: img1,
    title: "The Importance of Monitoring Systems in Ensuring Product Quality",
    description:
      "Discover how implementing advanced monitoring systems can help businesses ensure the quality and consistency of their products, leading to customer satisfaction and brand reputation.",
  },
  {
    id: 2,
    img: img2,
    title: "Sustainable Practices in Analytical Science",
    description:
      "Building a Greener Future: Explore the role of sustainable practices in the field of analytical science, and learn how businesses can contribute to a more eco-friendly and sustainable future through responsible analytical processes.",
  },
  {
    id: 3,
    img: img3,
    title: "Exploring the Role of IoT in Advanced Analytical Instrumentation",
    description:
      "Dive into the world of IoT and its impact on advanced analytical instrumentation, uncovering the benefits of real-time data monitoring, remote accessibility, and predictive analytics for enhanced analytical performance.",
  },
  {
    id: 4,
    img: img4,
    title: "How Advanced Data Analytics Enhance Analytical Performance",
    description:
      "Understand the power of advanced data analytics in unlocking valuable insights from analytical data, and learn how businesses can leverage this technology to optimize processes, improve decision-making, and drive innovation.",
  },
  {
    id: 5,
    img: img5,
    title:
      "A Guide to Selecting the Right Analytical Instrument for Your Industry",
    description:
      "Gain insights into the factors to consider when choosing an analytical instrument for your industry, including specific requirements, capabilities, and budget considerations, to make an informed decision that aligns with your business goals.",
  },
  {
    id: 6,
    img: img6,
    title: "The Future of Analytical Science",
    description:
      "Emerging Trends and Technologies: Stay ahead of the curve by exploring the latest trends and technologies shaping the future of analytical science, and gain valuable insights into how these advancements can revolutionize various industries.",
  },
  {
    id: 7,
    img: img7,
    title:
      "Best Practices for Calibration and Maintenance of Analytical Instruments",
    description:
      "Discover the importance of regular calibration and maintenance for analytical instruments, and learn about the best practices to ensure accurate and reliable results, prolong instrument lifespan, and maximize operational efficiency.",
  },
  {
    id: 8,
    img: img8,
    title: "Analytical Instrumentation in the Pharmaceutical Industry",
    description:
      "Ensuring Quality and Compliance: Explore the critical role of analytical instrumentation in the pharmaceutical industry, from drug development and quality control to regulatory compliance, and learn how advanced analytical solutions contribute to safe and effective pharmaceutical products.",
  },
  {
    id: 9,
    img: img9,
    title:
      "Enhancing Efficiency and Productivity through Automation in Analytical Processes",
    description:
      "Learn about the benefits of automation in analytical processes, including increased efficiency, reduced manual errors, and accelerated workflows, enabling businesses to achieve higher productivity and throughput.",
  },
  {
    id: 10,
    img: img10,
    title:
      "Applications of Analytical Instrumentation in Environmental Monitoring",
    description:
      "Delve into the applications of analytical instrumentation in environmental monitoring, and understand how advanced monitoring solutions contribute to the assessment, protection, and conservation of our environment.",
  },
];

const HeroSlider = () => {
  return (
    <div className="home__blog__wrapper">
      <div className="home__blog__header__content">
        <h1>Discover Our Blog</h1>
        <p>
          Explore our informative blog for the latest insights and trends in
          analytical science, empowering you to make informed decisions and
          unlock the potential of analytical excellence.
        </p>
      </div>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {BlogData.map((item) => {
          return (
            <SwiperSlide className="blog__slide" key={item.id}>
              <div className="blog__slide__img">
                <img src={item.img} alt="" />
              </div>
              <div className="blog__slide__content">
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <Link className="blog__slide__content__link ">
                  Read More
                  <BsArrowRightShort className="blog__slide__content__link__icon " />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
