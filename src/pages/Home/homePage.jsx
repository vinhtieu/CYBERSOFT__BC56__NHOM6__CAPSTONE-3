import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { movieService } from "../../services/services";
import { movieListSlice } from "../../lib/redux";
import { LoadingScreen } from "../../components";
import HomeContent from "./homeContent";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true);
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
      })
      .finally(() => {
        setTimeout(() => {
          setShowLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      {
        <CSSTransition
          in={showLoading}
          timeout={{
            appear: 0,
            enter: 0,
            exit: 500,
          }}
          classNames="component"
          unmountOnExit
          appear={true}>
          <LoadingScreen />
        </CSSTransition>
      }
      <HomeContent />
    </>
  );
}
