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
      className=" absolute top-[55%] -right-0 block z-50 group opacity-50">
      <figure className="hidden  w-[48px] h-[48px]  ml-auto mr-auto group-hover:inline-block">
        <img
          src="/assets/img/pngaaa.com-3944443.png"
          alt=""
          className="object-contain w-full h-full rotate-180"
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
      className=" absolute top-[55%] -left-0 block z-50 group opacity-50">
      <figure className="hidden ml-auto mr-auto  w-[48px] h-[48px]  group-hover:inline-block">
        <img
          src="/assets/img/pngaaa.com-3944443.png"
          alt=""
          className="object-contain w-full h-full "
        />
      </figure>
    </button>
  );
});

export default function TabletPortraitBanner() {
  const slickRef = useRef(0);
  const trendingMovieList = useSelector((state) => state.cinema.trendingMovies);
  const { openVideoPlayer, playVideo, setVideoURL } = videoPlayerSlice.actions;
  const dispatch = useDispatch();

  const settings = {
    prevArrow: <PrevArrow ref={slickRef} />,
    nextArrow: <NextArrow ref={slickRef} />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
                        src="/assets/img/playIcon.svg"
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
