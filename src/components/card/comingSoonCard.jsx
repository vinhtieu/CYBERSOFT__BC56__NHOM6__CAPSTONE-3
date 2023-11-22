import React from "react";
import "./style.css";
import { COMING_SOON, FALLBACK_IMG, NOW_PLAYING } from "../../constant";
import { useNavigate } from "react-router-dom";

export default function ComingSoonCard({ imgSrc, listType, movieID }) {
  const navigateTo = useNavigate();
  return (
    <div className="card">
      <figure
        className={`w-full aspect-[1/1.25] px-2 z-40 ml-auto mr-auto relative transition-all duration-[250ms]`}>
        <img
          className="object-cover object-bottom w-full h-full"
          src={imgSrc ? imgSrc : FALLBACK_IMG}
          onError={(e) => {
            console.log("this src is broken", imgSrc);
            e.target.src = FALLBACK_IMG;
            e.target.onerror = null;
          }}
          alt=""
        />
        <div className="detail">
          <div className="z-50 flex flex-col items-center justify-center w-full h-full gap-10 bg-black bg-opacity-60">
            <button
              onClick={() => {
                navigateTo(`/detail/${listType}-${movieID}`);
              }}
              className="px-6 py-2 min-[666px]:px-8 min-[666px]:py-4 bg-transparent text-white text-sm min-[666px]:text-base text-center border-2 border-solid border-white rounded hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-200">
              Detail
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
}
