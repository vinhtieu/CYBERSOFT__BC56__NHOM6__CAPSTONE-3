import React, { forwardRef } from "react";
import Slider from "react-slick";
import "./style.css";

const NextArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickNext();
      }}
      type="button"
      className="slick-next absolute top-[1.5rem] right-0 block bg-black bg-opacity-40 group-hover:bg-opacity-50 hover:bg-opacity-50  z-50 group">
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

export default NextArrow;
