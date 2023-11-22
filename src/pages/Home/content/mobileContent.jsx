import React from "react";
import { Carousel } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { videoPlayerSlice } from "../../../lib/redux";
import { NowPlayingCard, ComingSoonCard } from "../../../components/card";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";

const MobileContent = () => {
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
      <div className="block w-[90%] ml-auto px-2 mr-auto mb-8 mt-28 text-white text-2xl  leading-[1.5vw] font-bold z-50 relative">
        Now Playing
      </div>
      <Carousel className="mb-16">
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
      <div className="block w-[90%] ml-auto px-2 mr-auto mb-8  text-white text-2xl  leading-[1.5vw] font-bold z-50 relative">
        Coming Soon
      </div>
      <Carousel className="mb-16">
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
    </div>
  );
};

export default MobileContent;
