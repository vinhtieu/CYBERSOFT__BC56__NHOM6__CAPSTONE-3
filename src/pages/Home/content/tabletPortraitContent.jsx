import React from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import { Carousel } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { videoPlayerSlice } from "../../../lib/redux";
import { NowPlayingCard, ComingSoonCard } from "../../../components/card";

const TabletPortraitContent = () => {
  const nowPlayingMovieList = useSelector(
    (state) => state.cinema.nowPlayingMovies
  );
  const comingSoonMovieList = useSelector(
    (state) => state.cinema.comingSoonMovies
  );
  const videoPlayOpen = useSelector((state) => state.videoPlayer.isOpen);
  const videoURL = useSelector((state) => state.videoPlayer.url);
  const { closeVideoPlayer, pauseVideo } = videoPlayerSlice.actions;
  const dispatch = useDispatch();

  return (
    <div>
      <div className="block w-[90%] ml-auto px-2 mr-auto mb-4 mt-12 text-white text-lg leading-[1.5vw] font-bold z-50 relative">
        Now Playing
      </div>
      <Carousel className="mb-20">
        {nowPlayingMovieList.map((movie, index) => {
          return (
            <NowPlayingCard
              key={index}
              imgSrc={movie.poster}
              listType="nowPlaying"
              movieID={movie.movieID}></NowPlayingCard>
          );
        })}
      </Carousel>
      <div className="block w-[90%] ml-auto px-2 mr-auto mb-4  text-white text-lg leading-[1.5vw] font-bold z-50 relative">
        Coming Soon
      </div>
      <Carousel className="mb-20">
        {comingSoonMovieList.map((movie, index) => {
          return (
            <ComingSoonCard
              key={index}
              imgSrc={movie.poster}
              listType="comingSoon"
              movieID={movie.movieID}></ComingSoonCard>
          );
        })}
      </Carousel>
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
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-fit ">
              {contentElement}
              <figure className="absolute w-8 h-8 -top-10 -right-10">
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
};

export default TabletPortraitContent;
