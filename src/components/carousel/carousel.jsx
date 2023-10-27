import React from "react";
import Slider from "react-slick";
import "./style.css";
import "./theme.css";

export default function Carousel({ children }) {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
  };
  return <Slider {...settings}>{children}</Slider>;
}
