import React from "react";
import "./style.css";

export default function NowPlayingCard({ imgSrc }) {
  return (
    <div className="card">
      <figure
        className="
        w-full aspect-[1/1.25] px-2 z-40 ml-auto mr-auto relative transition-all duration-[250ms]">
        <img
          className="h-full w-full object-cover object-top"
          src={imgSrc}
          alt=""
        />
        <div className="detail">
          <div className="flex flex-col gap-10 items-center justify-center h-full w-full  bg-black bg-opacity-60  z-50">
            <button className="leading-10 w-2/3 px-8 py-4 bg-transparent text-white text-xl text-center border-4 border-sold border-white rounded hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-200">
              Get Tickets
            </button>
            <button className="leading-10 w-2/3 px-8 py-4 bg-transparent text-white text-xl text-center border-4 border-sold border-white rounded hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-200">
              Detail
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
}
