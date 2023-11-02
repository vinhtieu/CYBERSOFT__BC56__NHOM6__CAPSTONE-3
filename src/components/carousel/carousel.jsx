import React, { useRef, forwardRef } from "react";
import Slider from "react-slick";

const NextArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickNext();
      }}
      type="button"
      className="slick-next  absolute top-[1.5rem] right-[1vw] block z-50 group">
      <figure className="w-16 h-16 mr-auto ml-auto hidden group-hover:inline-block">
        <img
          src="src\assets\img\pngaaa.com-3944443.png"
          alt=""
          className="w-full h-full object-contain rotate-180"
        />
      </figure>
    </button>
  );
});

const PrevArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickPrev();
      }}
      type="button"
      className="slick-prev absolute top-[1.5rem] left-[1vw] block z-50 group ">
      <figure className="w-16 h-16 mr-auto ml-auto hidden group-hover:inline-block">
        <img
          src="src\assets\img\pngaaa.com-3944443.png"
          alt=""
          className="w-full h-full object-contain "
        />
      </figure>
    </button>
  );
});

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
        <Slider {...settings} ref={slickRef} className="group">
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
