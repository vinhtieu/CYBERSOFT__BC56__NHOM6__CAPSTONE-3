import React, { useRef } from "react";
import { VideoPlayer } from "../../components";
import Slider from "react-slick";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import "./style.css";
import { useSelector } from "react-redux";

export default function Banner() {
  const slickRef = useRef(0);
  const trendingMovieList = useSelector(
    (state) => state.movieList.trendingMovies
  );

  const settings = {
    prevArrow: <PrevArrow ref={slickRef} />,
    nextArrow: <NextArrow ref={slickRef} />,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
  };
  500 - 90;
  return (
    <div className="w-full h-[77vh] ">
      <Slider {...settings} ref={slickRef} className="group relative">
        {trendingMovieList.map((movie, index) => {
          return (
            <div key={index} class="h-[1500px]">
              <figure className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover object-left "
                  src={movie.poster}
                  alt="Thumbnail"
                />
                <div className="absolute left-[5%] top-[40%] -translate-y-1/2 flex flex-col">
                  <img
                    src={movie.title}
                    className=" w-[65rem] aspect-auto mb-6"
                  />
                  <span className="text-[1.5vw] text-white mb-10 opacity-90">
                    Coming Soon | December 24
                  </span>
                  <button
                    onClick={(param) => {}}
                    className="w-fit leading-10 px-14 py-4 bg-[#ae1f22] text-white text-xl rounded-md flex flex-row items-center gap-4 justify-start">
                    <img
                      className="w-14 h-14"
                      src="src\assets\img\playIcon.svg"
                      alt=""
                    />
                    Watch Trailer
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent"></div>
              </figure>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
