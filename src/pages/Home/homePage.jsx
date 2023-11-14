import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cinemaService } from "../../services";
import { cinemaSlice, loadingScreenSlice } from "../../lib/redux";
import HomeContent from "./homeContent";
import { getComingSoonMovies, getNowPlayingMovies } from "../../lib/helper";
import "./style.css";
import { FETCHING, NOT_FETCHED } from "../../constant";

export default function HomePage() {
  const FetchStatus = useSelector((state) => state.cinema.fetchStatus);
  const { setData, setNowPlayingMovies, setComingSoonMovies, setFetchStatus } =
    cinemaSlice.actions;
  const { loadingOn, loadingOff } = loadingScreenSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect in homepage running");

    if (FetchStatus === NOT_FETCHED) {
      dispatch(setFetchStatus(FETCHING));
      dispatch(loadingOn());
      Promise.all([cinemaService.getData()])
        .then(([res]) => {
          const nowPlayingMovies = getNowPlayingMovies(res.data);
          const comingSoonMovies = getComingSoonMovies(res.data);
          dispatch(setData(res.data));
          dispatch(setNowPlayingMovies(nowPlayingMovies));
          dispatch(setComingSoonMovies(comingSoonMovies));
          sessionStorage.setItem(
            "now_playing_movies",
            JSON.stringify(nowPlayingMovies)
          );
          sessionStorage.setItem(
            "coming_soon_movies",
            JSON.stringify(comingSoonMovies)
          );
          sessionStorage.setItem("cinema_data", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            dispatch(loadingOff());
          }, 500);
        });
    }
  }, []);

  return (
    <>
      <HomeContent />
    </>
  );
}
