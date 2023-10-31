import React, { useEffect } from "react";
import { Carousel, Banner } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { movieService } from "../../services/services";
import {
  setComingSoonMovies,
  setNowPlayingMovies,
} from "../../lib/redux/movieListSlice";
import { NowPlayingCard, ComingSoonCard } from "../../components/card";

export default function HomePage() {
  const nowPlayingMovieList = useSelector(
    (state) => state.movieList.nowPlayingMovies
  );
  const comingSoonMovieList = useSelector(
    (state) => state.movieList.comingSoonMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    movieService
      .getNowPlayingMovies()
      .then((res) => {
        dispatch(setNowPlayingMovies(res.data));
      })
      .catch((err) => {
        console.log(err);
      });

    movieService
      .getComingSoonMovies()
      .then((res) => {
        dispatch(setComingSoonMovies(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Banner />
      <div className="px-16 mb-8 text-white text-[1.8vw] leading-[1.5vw] font-bold z-50 relative">
        Now Playing
      </div>
      <Carousel className="mb-36">
        {nowPlayingMovieList.map((movie) => {
          return <NowPlayingCard imgSrc={movie.poster}></NowPlayingCard>;
        })}
      </Carousel>
      <div className="px-16 mb-8 text-white text-[1.8vw] leading-[1.5vw] font-bold z-50 relative">
        Coming Soon
      </div>
      <Carousel className="mb-32">
        {comingSoonMovieList.map((movie) => {
          return <ComingSoonCard imgSrc={movie.poster}></ComingSoonCard>;
        })}
      </Carousel>
    </>
  );
}
