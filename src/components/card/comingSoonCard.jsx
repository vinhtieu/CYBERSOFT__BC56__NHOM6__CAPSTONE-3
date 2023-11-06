import React from "react";
import "./style.css";

export default function ComingSoonCard({ imgSrc }) {
  return (
    <div className="card">
      <figure
        className={`w-full aspect-[1/1.25] px-2 z-40 ml-auto mr-auto relative transition-all duration-[250ms]`}>
        <img
          className="object-cover object-top w-full h-full"
          src={imgSrc}
          alt=""
        />
        <div className="detail">
          <div className="z-50 flex flex-col items-center justify-center w-full h-full gap-10 bg-black bg-opacity-60">
            <button className="leading-10 w-2/3 px-8 py-4 bg-transparent text-white text-xl text-center border-4 border-sold border-white rounded hover:bg-[#ae1f22] hover:border-[#ae1f22] transition-all duration-200">
              Detail
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
}

// min-[2100px]:px-4
// px-3
// min-[1400px]:px-4
// min-[1670px]:px-5
// min-[2710px]:px-6
// min-[1400px]:h-[275px] min-[1400px]:w-[225px]
// min-[1670px]:h-[300px] min-[1670px]:w-[250px]
// min-[1800px]:h-[325px] min-[1800px]:w-[275px]
// min-[2070px]:h-[350px] min-[2070px]:w-[300px]
// min-[2550px]:h-[375px] min-[2550px]:w-[325px]
// min-[2710px]:h-[400px] min-[2710px]:w-[350px]
