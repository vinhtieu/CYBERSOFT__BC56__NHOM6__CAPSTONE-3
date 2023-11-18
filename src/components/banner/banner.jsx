import React from "react";
import { FALLBACK_IMG } from "../../constant";

export default function Banner({ className, imgSrc }) {
  return (
    <div
      className={`${className ? className : ""} hidden min-[888px]:block max`}>
      <figure className="-w-screen max-h-[1000px] ">
        <img
          className="object-cover w-full h-full"
          src={imgSrc ? imgSrc : FALLBACK_IMG}
          onError={(e) => {
            e.target.src = FALLBACK_IMG;
            e.target.onerror = null;
          }}
          alt=""
        />
      </figure>
    </div>
  );
}
