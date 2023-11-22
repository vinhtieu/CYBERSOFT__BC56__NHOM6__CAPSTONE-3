import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import videoPlayerSlice from "../../lib/redux/videoPlayerSlice";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";

export default function MobileDetail() {
  const videoPlayOpen = useSelector((state) => state.videoPlayer.isOpen);
  const {
    setVideoURL,
    openVideoPlayer,
    closeVideoPlayer,
    playVideo,
    pauseVideo,
  } = videoPlayerSlice.actions;
  const videoURL = useSelector((state) => state.videoPlayer.url);
  const nowPlayingList = useSelector((state) => state.cinema.nowPlayingMovies);
  const comingSoonList = useSelector((state) => state.cinema.comingSoonMovies);
  const dispatch = useDispatch();

  const getIdAndType = () => {
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const lastIndex = splitURL.length - 1;
    const [type, id] = splitURL[lastIndex].split("-");
    return [type, id];
  };

  const getMovieById = (type, id) => {
    switch (type) {
      case "nowPlaying":
        return nowPlayingList.filter((item) => +item.movieID === +id);
      case "comingSoon":
        return comingSoonList.filter((item) => +item.movieID === +id);
    }
  };

  const renderCTAButtons = (
    type,
    trailerURL = "https://www.youtube.com/watch?v=DNFH1N69fvk"
  ) => {
    switch (type) {
      case "nowPlaying":
        return (
          <div className="flex flex-row justify-center gap-4 min-[375px]:gap-10">
            <button
              onClick={() => {
                dispatch(setVideoURL(trailerURL));
                dispatch(openVideoPlayer());
                dispatch(playVideo());
              }}
              className="px-8 py-4 text-lg min-[375px]:text-2xl border-2 border-white rounded-md cursor-pointer">
              Trailer
            </button>
            <button className="cursor-pointer text-lg min-[375px]:text-2xl text-white border-2 border-[#ae1f22] bg-[#ae1f22] rounded-md px-6 py-3">
              Get Tickets
            </button>
          </div>
        );
      case "comingSoon":
        return (
          <div className="flex flex-row justify-center">
            <button
              onClick={() => {
                dispatch(setVideoURL(trailerURL));
                dispatch(openVideoPlayer());
                dispatch(playVideo());
              }}
              className="px-6 py-3 text-2xl min-[375px]:text-4xl border-2 border-white rounded-md cursor-pointer">
              Trailer
            </button>
          </div>
        );
    }
  };

  const renderMovieDetail = () => {
    const [listType, movieId] = getIdAndType();
    const movieDetail = getMovieById(listType, movieId);
    return (
      <div className="w-[90%] mr-auto ml-auto py-6">
        <div className="flex flex-col items-center justify-center">
          <figure className="overflow-hidden rounded-md h-[30rem] aspect-auto mb-8">
            <img
              className="object-cover w-full h-full"
              src={movieDetail[0].poster}
              alt=""
            />
          </figure>
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-white">
              {movieDetail[0].title}
            </h2>
            <p className="mb-6 text-xl flex-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              eligendi vel fugiat accusamus? Qui blanditiis dolor architecto
              quasi eos placeat, voluptatem voluptas corrupti fugit neque,
              soluta odit repellat non voluptatum accusantium facere
            </p>
            <ul className="mb-10 space-y-4">
              <li>
                <span className="mr-6 text-xl font-bold">Date Release:</span>
                <span className="text-lg">Bob Smith</span>
              </li>
              <li>
                <span className="mr-6 text-xl font-bold">Director:</span>
                <span className="text-lg">Bob Smith</span>
              </li>
              <li>
                <span className="mr-6 text-xl font-bold">Cast:</span>
                <span className="text-lg">Bob Smith</span>
              </li>
              <li>
                <span className="mr-6 text-xl font-bold">Genres:</span>
                <span className="text-lg">Adventure</span>
              </li>
            </ul>
            {renderCTAButtons(listType, movieDetail[0]?.trailer)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-1 h-full mt-24 2xl:mt-28 place-items-center">
      {renderMovieDetail()}
      <ReactModal
        isOpen={videoPlayOpen}
        onRequestClose={() => {
          dispatch(closeVideoPlayer());
          dispatch(pauseVideo());
        }}
        ariaHideApp={false}
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-[110]"
        overlayElement={(props, contentElement) => (
          <div {...props}>
            <div className="absolute flex flex-row gap-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-fit auto">
              {contentElement}
              <figure className="absolute w-8 h-8 -right-10 -top-10">
                <img
                  className="object-contain w-full h-full cursor-pointer"
                  src="/assets/img/cross.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        )}
        className="w-[75vw] aspect-video inset-10 border border-solid border-[rgb(204,204,204)] bg-white overflow-auto rounded outline-none ">
        <ReactPlayer
          playing={true}
          controls={true}
          volume={0.5}
          loop={true}
          width="100%"
          height="100%"
          style={{
            scale: "1",
          }}
          url={videoURL}
          onError={(err) => {
            console.log("error: ", err);
          }}
        />
      </ReactModal>
    </div>
  );
}
