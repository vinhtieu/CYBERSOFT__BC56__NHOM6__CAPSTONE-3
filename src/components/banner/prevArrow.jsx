import React, { forwardRef } from "react";
import "./style.css";

const PrevArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickPrev();
      }}
      type="button"
      className=" absolute top-1/2 left-[1vw] block z-50 group">
      <figure className="w-24 h-24 mr-auto ml-auto hidden group-hover:inline-block">
        <img
          src="src\assets\img\pngaaa.com-3944443.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </figure>
    </button>
  );
});

export default PrevArrow;
