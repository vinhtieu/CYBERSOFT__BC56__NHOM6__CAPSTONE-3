import React, { useRef, forwardRef } from "react";
import Slider from "react-slick";

const PrevArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickPrev();
      }}
      type="button"
      className="slick-prev absolute top-[1.5rem] left-[1vw] z-50 group block opacity-50">
      <figure className="absolute left-0 ml-auto mr-auto -translate-y-1/2 w-14 h-14 group-hover:inline-block top-1/2">
        <img
          src="/assets/img/pngaaa.com-3944443.png"
          alt=""
          className="object-contain w-full h-full "
        />
      </figure>
    </button>
  );
});

const NextArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickNext();
      }}
      type="button"
      className="slick-next  absolute top-[1.5rem] right-[1vw] z-50 group block opacity-50">
      <figure className="absolute right-0 ml-auto mr-auto -translate-y-1/2 w-14 h-14 group-hover:inline-block top-1/2">
        <img
          src="/assets/img/pngaaa.com-3944443.png"
          alt=""
          className="object-contain w-full h-full rotate-180"
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
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
    vertical: false,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 2410,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 666,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
    ],
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
