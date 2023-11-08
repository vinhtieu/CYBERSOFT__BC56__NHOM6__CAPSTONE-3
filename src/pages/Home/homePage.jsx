import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { movieService } from "../../services/services";
import { movieListSlice } from "../../lib/redux";
import { LoadingScreen } from "../../components";
import HomeContent from "./homeContent";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export default function HomePage() {
  const { setComingSoonMovies, setNowPlayingMovies } = movieListSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      movieService.getNowPlayingMovies(),
      movieService.getComingSoonMovies(),
    ])
      .then(([nowPlayingRes, comingSoonRes]) => {
        dispatch(setNowPlayingMovies(nowPlayingRes.data));
        dispatch(setComingSoonMovies(comingSoonRes.data));
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
