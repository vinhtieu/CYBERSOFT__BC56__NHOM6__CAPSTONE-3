import React, { useRef } from "react";
import Slider from "react-slick";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import "./style.css";

const Carousel = ({ className, children }) => {
  const slickRef = useRef(0);

  const settings = {
    prevArrow: <PrevArrow ref={slickRef} />,
    nextArrow: <NextArrow ref={slickRef} />,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
    arrows: true,
    vertical: false,
    // centerMode: true,
    // variableWidth: true,
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-[90%] ml-auto mr-auto">
        <Slider {...settings} ref={slickRef} className="group ">
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
