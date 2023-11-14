import React from "react";
import { Banner } from "../../components";
import { useSelector } from "react-redux";
import { FALLBACK_IMG } from "../../constant";

export default function Promotion() {
  const thumbnailList = useSelector((state) => state.promotion.thumbnails);
  const renderPromotion = () => {
    return thumbnailList.map((thumbnail, index) => {
      return (
        <figure key={index} className="w-[12vw] h-[12vw]">
          <img
            className="object-cover w-full h-full"
            src={thumbnail ? thumbnail : FALLBACK_IMG}
            onError={(e) => {
              e.target.src = FALLBACK_IMG;
              e.target.onError = null;
            }}
            alt=""
          />
        </figure>
      );
    });
  };

  return (
    <>
      <Banner
        className="mb-24"
        imgSrc="https://oneilcinemas.com/site/assets/files/2261/marvels-banner-epping.1920x742.jpg"
      />

      <div className="w-[60%] ml-auto mr-auto mb-24">
        <h2 className="mb-16 text-6xl text-center">Promotion</h2>
        <div className="flex flex-row flex-wrap justify-between gap-12 px-12">
          {renderPromotion()}
        </div>
      </div>
    </>
  );
}
