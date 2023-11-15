import React from "react";
import { Banner } from "../../components";
import { useSelector } from "react-redux";
import { FALLBACK_IMG } from "../../constant";

export default function Promotion() {
  const thumbnailList = useSelector((state) => state.promotion.thumbnails);

  const renderPromotion = () => {
    return thumbnailList.map((thumbnail, index) => {
      return (
        <li
          key={index}
          className={`
          max-[665.98px]:w-[100%]
          min-[666px]:w-[50%]
          min-[940px]:w-[33.33%]
          min-[1670px]:w-[25%]
          aspect-square
          inline-flex
          transition-all
          `}>
          <figure
            className="inline-block mb-auto mt-auto ml-auto mr-auto
          w-[90%] h-[90%]
          max-[665.98px]:mb-auto max-[665.98px]:ml-auto max-[665.98px]:mr-auto
          max-[940px]:w-[80%] max-[940px]:h-[80%]
          max-[1200px]:w-[85%] max-[1200px]:h-[85%]
          ">
            <img
              className="object-cover w-full h-full p-0 m-0"
              src={thumbnail ? thumbnail : FALLBACK_IMG}
              onError={(e) => {
                e.target.src = FALLBACK_IMG;
                e.target.onError = null;
              }}
              alt=""
            />
          </figure>
        </li>
      );
    });
  };
  // min-[666px]:w-[90%] min-[1200px]:w-[80%] min-[1400px]:w-[60%]

  return (
    <div className="mt-[10rem] 2xl:mt-[11rem] max-[666px]-[80%] max-[1100px]:w-[75%] w-[60%] ml-auto mr-auto">
      {/* <Banner
        className="mb-24"
        imgSrc="https://oneilcinemas.com/site/assets/files/2261/marvels-banner-epping.1920x742.jpg"
      /> */}

      <div className="mb-24 ">
        <h2 className="mb-10 text-5xl text-center transition-all lg:mb-16 lg:text-6xl ">
          Promotion
        </h2>
        <div className="w-full h-full">
          <ul className="px-8 ml-auto mr-auto ">{renderPromotion()}</ul>
        </div>
      </div>
    </div>
  );
}
