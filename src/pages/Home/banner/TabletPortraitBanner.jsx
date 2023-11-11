import React, { forwardRef, useRef } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { videoPlayerSlice } from "../../../lib/redux";

export default function TabletPortraitBanner() {
  const slickRef = useRef(0);
  const trendingMovieList = useSelector((state) => state.cinema.trendingMovies);
  const { openVideoPlayer, playVideo, setVideoURL } = videoPlayerSlice.actions;
  const dispatch = useDispatch();

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: false,
  };

  return (
    <div className="pb-[42%] mb-[20px] select-none relative">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Slider {...settings} ref={slickRef} className="group">
          {trendingMovieList.map((movie, index) => {
            return (
              <div key={index} className="h-[61vw]  w-full z-50 text-white">
                <div className="relative w-full h-full">
                  <figure className="w-full h-full">
                    <img
                      className="object-cover object-left w-full h-full "
                      src={movie.poster}
                      alt="Thumbnail"
                    />
                  </figure>
                  <div className="absolute left-[5%] top-[43.5%] px-2 -translate-y-1/2 flex flex-col">
                    <figure className="w-[36vw] mb-2">
                      <img src={movie.title} className="w-full aspect-auto" />
                    </figure>

                    <span className="text-lg font-normal">
                      Coming Soon | December 24
                    </span>
                    <button
                      onClick={() => {
                        dispatch(setVideoURL(movie.trailer));
                        dispatch(openVideoPlayer());
                        dispatch(playVideo());
                      }}
                      className="p-[.7vw] ps-[1.6vw] pe-[2vw]
                      mt-[1.2vw] leading-[2.6vw]  w-fit bg-[#ae1f22] rounded-md flex flex-row items-center gap-2  justify-start">
                      <img
                        className="w-[2rem] h-[2rem] "
                        src="src\assets\img\playIcon.svg"
                        alt=""
                      />
                      <span className="text-base font-medium">
                        Watch Trailer
                      </span>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[7vh] bg-gradient-to-t from-black to-transparent"></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
