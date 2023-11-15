import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cinemaService } from "../../services";
import { cinemaSlice, loadingScreenSlice, userSlice } from "../../lib/redux";
import HomeContent from "./homeContent";
import { getComingSoonMovies, getNowPlayingMovies } from "../../lib/helper";
import {
  FETCHED,
  FETCHED_FAILED,
  FETCHING,
  LOGGING_OUT,
  LOG_OUT,
  NOT_FETCHED,
} from "../../constant";
import "./style.css";

export default function HomePage() {
  const fetchStatus = useSelector((state) => state.cinema.fetchStatus);
  const accountStatus = useSelector((state) => state.user.accountStatus);
  const { setData, setNowPlayingMovies, setComingSoonMovies, setFetchStatus } =
    cinemaSlice.actions;
  const { setAccountStatus } = userSlice.actions;
  const { loadingOff } = loadingScreenSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus === NOT_FETCHED || accountStatus === LOGGING_OUT) {
      dispatch(setFetchStatus(FETCHING));
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
          dispatch(setFetchStatus(FETCHED));
        })
        .catch((err) => {
          console.log(err);
          dispatch(setFetchStatus(FETCHED_FAILED));
        })
        .finally(() => {
          dispatch(setAccountStatus(LOG_OUT));
          setTimeout(() => {
            dispatch(loadingOff());
          }, 500);
        });
    }
  }, [fetchStatus, accountStatus]);

  return (
    <>
      <HomeContent />
    </>
  );
}
