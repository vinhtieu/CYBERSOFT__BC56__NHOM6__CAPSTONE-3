import React from "react";
import { Carousel } from "../../components";
import Banner from "./banner";
import { useDispatch, useSelector } from "react-redux";
import { videoPlayerSlice } from "../../lib/redux";
import { NowPlayingCard, ComingSoonCard } from "../../components/card";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";

const HomeContent = () => {
  const nowPlayingMovieList = useSelector(
    (state) => state.movieList.nowPlayingMovies
  );
  const comingSoonMovieList = useSelector(
    (state) => state.movieList.comingSoonMovies
  );
  const videoPlayOpen = useSelector((state) => state.videoPlayer.isOpen);
  const videoURL = useSelector((state) => state.videoPlayer.url);
  const { closeVideoPlayer, pauseVideo } = videoPlayerSlice.actions;
  const dispatch = useDispatch();

  return (
    <div>
      <Banner />
      <div className="block w-[90%] ml-auto mr-auto px-8 mb-8 mt-24 text-white text-[1.8vw] leading-[1.5vw] font-bold z-50 relative">
        Now Playing
      </div>
      <Carousel className="mb-32">
        {nowPlayingMovieList.map((movie, index) => {
          return (
            <NowPlayingCard key={index} imgSrc={movie.poster}></NowPlayingCard>
          );
        })}
      </Carousel>
      <div className="block w-[90%] ml-auto mr-auto px-8 mb-8 text-white text-[1.8vw] leading-[1.5vw] font-bold z-50 relative">
        Coming Soon
      </div>
      <Carousel className=" mb-32">
        {comingSoonMovieList.map((movie, index) => {
          return (
            <ComingSoonCard key={index} imgSrc={movie.poster}></ComingSoonCard>
          );
        })}
      </Carousel>
      <ReactModal
        isOpen={videoPlayOpen}
        onRequestClose={() => {
          console.log("request closing modal");
          dispatch(closeVideoPlayer());
          dispatch(pauseVideo());
        }}
        ariaHideApp={false}
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-[60]"
        overlayElement={(props, contentElement) => (
          <div {...props}>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-fit auto flex flex-row gap-8">
              {contentElement}
              <figure className="w-12 h-12">
                <img
                  className="w-full h-full object-contain cursor-pointer"
                  src="src\assets\img\cross.png"
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
};

export default HomeContent;
