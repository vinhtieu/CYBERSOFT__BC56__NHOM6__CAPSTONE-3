import React, { forwardRef, useRef } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { videoPlayerSlice } from "../../../lib/redux";

const NextArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickNext();
      }}
      type="button"
      className=" absolute top-[55%] right-[.5vw] block z-50 group">
      <figure className="w-24 h-24 mr-auto ml-auto hidden group-hover:inline-block">
        <img
          src="src\assets\img\pngaaa.com-3944443.png"
          alt=""
          className="w-full h-full object-contain rotate-180"
        />
      </figure>
    </button>
  );
});

const PrevArrow = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current.slickPrev();
      }}
      type="button"
      className=" absolute top-[55%] left-[.5vw] block z-50 group ">
      <figure className="w-24 h-24 mr-auto ml-auto hidden group-hover:inline-block">
        <img
          src="src\assets\img\pngaaa.com-3944443.png"
          alt=""
          className="w-full h-full object-contain "
        />
      </figure>
    </button>
  );
});

export default function BannerBigDesktop() {
  const slickRef = useRef(0);
  const trendingMovieList = useSelector(
    (state) => state.movieList.trendingMovies
  );
  const { openVideoPlayer, playVideo, setVideoURL } = videoPlayerSlice.actions;
  const dispatch = useDispatch();

  const settings = {
    prevArrow: <PrevArrow ref={slickRef} />,
    nextArrow: <NextArrow ref={slickRef} />,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
    // responsive: [
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       autoplay: true,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 940,
    //     settings: {
    //       autoplay: true,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 666,
    //     settings: {
    //       autoplay: true,
    //       arrows: false,
    //     },
    //   },
    // ],
  };

  500 - 90;
  return (
    <div className="pb-[40%] mb-[20px] select-none relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Slider {...settings} ref={slickRef} className="group">
          {trendingMovieList.map((movie, index) => {
            return (
              <div key={index} className=" h-[56.25vw] w-full z-50 text-white">
                <div className="w-full h-full relative">
                  <figure className="w-full h-full">
                    <img
                      className="w-full h-full object-cover object-left "
                      src={movie.poster}
                      alt="Thumbnail"
                    />
                  </figure>
                  <div className="absolute left-[5%] top-[40%] px-2 -translate-y-1/2 flex flex-col">
                    <figure className="w-[36vw] mb-6">
                      <img src={movie.title} className=" w-full aspect-auto" />
                    </figure>

                    <span className="text-[1.2vw] font-normal">
                      Coming Soon | December 24
                    </span>
                    <button
                      onClick={() => {
                        dispatch(setVideoURL(movie.trailer));
                        dispatch(openVideoPlayer());
                        dispatch(playVideo());
                      }}
                      className="p-[.6vw] ps-[1.4vw] pe-[1.8vw] mt-[1.5vw] leading-[2.4vw] w-fit bg-[#ae1f22] rounded-md flex flex-row items-center gap-4 justify-start">
                      <img
                        className="w-[2vw] h-[2vw]"
                        src="src\assets\img\playIcon.svg"
                        alt=""
                      />
                      <span className="text-[1.2vw] font-medium">
                        Watch Trailer
                      </span>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[5vh] bg-gradient-to-t from-black to-transparent"></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
