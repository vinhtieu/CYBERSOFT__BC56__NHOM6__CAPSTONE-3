import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { movieService } from "../../services/services";
import {
  setComingSoonMovies,
  setNowPlayingMovies,
} from "../../lib/redux/movieListSlice";
import { LoadingScreen } from "../../components";
import HomeContent from "./homeContent";

export default function HomePage() {
  const [isCallingApi, setIsCallingApi] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsCallingApi(true);

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
          setIsCallingApi(false);
        }, 1000);
      });
  }, []);

  // return <LoadingScreen />;
  return isCallingApi ? <LoadingScreen /> : <HomeContent />;
}
