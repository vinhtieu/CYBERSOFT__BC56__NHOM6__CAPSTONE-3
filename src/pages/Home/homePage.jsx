import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { movieService } from "../../services/services";
import { movieListSlice } from "../../lib/redux";
import { LoadingScreen } from "../../components";
import HomeContent from "./homeContent";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true);
  const [showHomeContent, setShowHomeContent] = useState(false);
  const { setComingSoonMovies, setNowPlayingMovies } = movieListSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      // console.log("loading"),
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
          appear={true}
          onEnter={() => setShowHomeContent(false)}
          onExited={() => setShowHomeContent(true)}>
          <LoadingScreen />
        </CSSTransition>
      }
      <HomeContent />

      {/* {
        <CSSTransition
          in={showHomeContent}
          timeout={{
            appear: 500,
            enter: 500,
            exit: 500,
          }}
          classNames="component"
          unmountOnExit
          appear={true}
          onEnter={() => setShowLoading(false)}>
        </CSSTransition>
      } */}
    </>
  );
}
