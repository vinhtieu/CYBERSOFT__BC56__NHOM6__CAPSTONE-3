import React from "react";
import { Carousel, Banner } from "../../components";

export default function HomePage() {
  return (
    <>
      <Banner />
      <div className="px-16 mb-8 text-white text-[1.8vw] leading-[1.5vw] font-bold z-50 relative">
        Now Playing
      </div>
      <Carousel className="mb-32"></Carousel>
      {/* <span className="mb-8 text-white font-medium">Coming Soon</span>
      <Carousel className="mb-32"></Carousel> */}
    </>
  );
}
