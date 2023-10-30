import React from "react";
import "./style.css";

export default function Card({ imgSrc }) {
  return (
    <div className="card ">
      <figure className="h-[400px] w-[350px] px-8 my-6 z-40">
        <img className="h-full w-full object-cover " src={imgSrc} alt="" />
      </figure>
      <div className="detail ">
        <a className="leading-8 w-1/2 px-8 py-4 text-white text-xl text-center border-4 border-sold border-white rounded-full hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-250">
          Get Tickets
        </a>
        <a className="leading-8 w-1/2 px-8 py-4 text-white text-xl text-center border-4 border-sold border-white rounded-full hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-250">
          Detail
        </a>
      </div>
    </div>
  );
}
