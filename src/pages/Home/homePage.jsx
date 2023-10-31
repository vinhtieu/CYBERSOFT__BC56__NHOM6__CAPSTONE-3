import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { movieService } from "../../services/services";
import {
  setComingSoonMovies,
  setNowPlayingMovies,
} from "../../lib/redux/movieListSlice";
import { LoadingScreen } from "../../components";
import HomeContent from "./homeContent";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true);
  const [showHomeContent, setShowHomeContent] = useState(false);
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
        }, 500);
      });
  }, []);

  return (
    <>
      {
        <CSSTransition
          in={showLoading}
          timeout={{
            appear: 500,
            enter: 500,
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
      {
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
          <HomeContent />
        </CSSTransition>
      }
    </>
  );
}
