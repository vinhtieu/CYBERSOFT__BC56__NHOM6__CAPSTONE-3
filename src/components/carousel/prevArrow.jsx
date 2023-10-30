import React, { forwardRef } from "react";
import Slider from "react-slick";
import "./style.css";

const PrevArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickPrev();
      }}
      type="button"
      className="slick-next absolute top-0 left-0  block bg-black  bg-opacity-40 group-hover:bg-opacity-50 hover:bg-opacity-50  z-50 group">
      <figure className="w-10 h-10 mr-auto ml-auto hidden group-hover:inline-block">
        <img
          src="src\assets\img\pngaaa.com-3944443.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </figure>
    </button>
  );
});

export default PrevArrow;
