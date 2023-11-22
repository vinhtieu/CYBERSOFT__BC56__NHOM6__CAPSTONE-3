import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function NowPlayingCard({
  imgSrc,
  listType,
  movieID,
  movieTitle,
}) {
  const navigateTo = useNavigate();

  return (
    <div className="card">
      <figure
        className="
        w-full aspect-[1/1.25] px-2 z-40 ml-auto mr-auto relative transition-all duration-[250ms]">
        <img
          className="object-cover object-bottom w-full h-full"
          src={imgSrc ? imgSrc : FALLBACK_IMG}
          onError={(e) => {
            e.target.src = FALLBACK_IMG;
            e.target.onerror = null;
          }}
          alt=""
        />
        <div className="detail">
          <div className="z-50 flex flex-col items-center justify-center w-full h-full gap-10 bg-black bg-opacity-60">
            <button
              onClick={() => {
                navigateTo(`/booking/${movieID}-${movieTitle}`);
              }}
              className="px-8 py-4 bg-transparent text-white text-center border-2 border-solid border-white rounded hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-200">
              Get Tickets
            </button>
            <button
              onClick={() => {
                navigateTo(`/detail/${listType}-${movieID}`);
              }}
              className="px-8 py-4 bg-transparent text-white text-center border-2 border-solid border-white rounded hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-200">
              Detail
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
}
