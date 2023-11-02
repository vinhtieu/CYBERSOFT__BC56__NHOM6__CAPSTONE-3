import React from "react";
import { Carousel, Banner } from "../../components";
import { useSelector } from "react-redux";
import { NowPlayingCard, ComingSoonCard } from "../../components/card";

const HomeContent = () => {
  const nowPlayingMovieList = useSelector(
    (state) => state.movieList.nowPlayingMovies
  );
  const comingSoonMovieList = useSelector(
    (state) => state.movieList.comingSoonMovies
  );

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
    </div>
  );
};

export default HomeContent;
