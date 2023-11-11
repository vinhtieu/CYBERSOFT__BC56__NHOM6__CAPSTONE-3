import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cinemaService } from "../../services";
import { cinemaSlice } from "../../lib/redux";
import { LoadingScreen } from "../../components";
import HomeContent from "./homeContent";
import { CSSTransition } from "react-transition-group";
import "./style.css";
import { getComingSoonMovies, getNowPlayingMovies } from "../../lib/helper";

export default function HomePage() {
  const { setData, setNowPlayingMovies, setComingSoonMovies } =
    cinemaSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([cinemaService.getData()])
      .then(([res]) => {
        const nowPlayingMovies = getNowPlayingMovies(res.data);
        const comingSoonMovies = getComingSoonMovies(res.data);

        console.table(nowPlayingMovies);
        dispatch(setData(res.data));
        dispatch(setNowPlayingMovies(nowPlayingMovies));
        dispatch(setComingSoonMovies(comingSoonMovies));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HomeContent />
    </>
  );
}
