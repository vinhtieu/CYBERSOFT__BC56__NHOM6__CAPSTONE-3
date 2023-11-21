import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import videoPlayerSlice from "../../lib/redux/videoPlayerSlice";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";

export default function Detail() {
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
          <div className="flex flex-row gap-8">
            <button
              onClick={() => {
                dispatch(setVideoURL(trailerURL));
                dispatch(openVideoPlayer());
                dispatch(playVideo());
              }}
              className="cursor-pointer  text-xl border-2 border-white  rounded-md px-5 py-2">
              Trailer
            </button>
            <button className="cursor-pointer  text-xl text-white border-2 border-[#ae1f22] bg-[#ae1f22] rounded-md px-6 py-3">
              Get Tickets
            </button>
          </div>
        );
      case "comingSoon":
        return (
          <div className="">
            <button
              onClick={() => {
                dispatch(setVideoURL(trailerURL));
                dispatch(openVideoPlayer());
                dispatch(playVideo());
              }}
              className="cursor-pointer  text-xl border-2 border-white  rounded-md px-6 py-3">
              Trailer
            </button>
          </div>
        );
    }
  };

  const renderMovieDetail = () => {
    const [listType, movieId] = getIdAndType();
    const movieDetail = getMovieById(listType, movieId);
    console.log(movieDetail);
    return (
      <div className="w-[60%] mr-auto ml-auto py-10">
        <div className=" flex flex-row">
          <figure className="h-[35.875rem] aspect-[11/17] mr-12 rounded-md ">
            <img
              className="w-full h-full object-cover"
              src={movieDetail[0].poster}
              alt=""
            />
          </figure>
          <div>
            <h2 className="text-4xl font-semibold text-white mb-8">
              {movieDetail[0].title}
            </h2>
            <p className="text-xl mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              eligendi vel fugiat accusamus? Qui blanditiis dolor architecto
              quasi eos placeat, voluptatem voluptas corrupti fugit neque,
              soluta odit repellat non voluptatum accusantium facere
            </p>
            <ul className="space-y-5 mb-10">
              <li>
                <span className="text-xl font-bold mr-6">Date Release:</span>
                <span className="text-lg">Bob Smith</span>
              </li>
              <li>
                <span className="text-xl font-bold mr-6">Director:</span>
                <span className="text-lg">Bob Smith</span>
              </li>
              <li>
                <span className="text-xl font-bold mr-6">Cast:</span>
                <span className="text-lg">Bob Smith</span>
              </li>
              <li>
                <span className="text-xl font-bold mr-6">Genres:</span>
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
    <div className="flex-1 h-full mt-24 2xl:mt-28  flex place-items-center">
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
            <div className="absolute flex flex-row gap-8 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-fit auto">
              {contentElement}
              <figure className="w-12 h-12">
                <img
                  className="object-contain w-full h-full cursor-pointer"
                  src="/assets/img/cross.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        )}
        className="w-[50vw] aspect-video inset-10 border border-solid border-[rgb(204,204,204)] bg-white overflow-auto rounded outline-none ">
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
