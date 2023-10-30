import React, { useEffect } from "react";
import Card from "../card";
import { movieService } from "../../services/services";
import { setList } from "../../lib/redux/movieListSlice";

import { useDispatch, useSelector } from "react-redux";
export default function MovieList() {
  const movieList = useSelector((state) => state.movieList.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    movieService
      .getList()
      .then((res) => {
        dispatch(setList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {movieList.map((movie, index) => {
        return <Card key={index} imgSrc={movie.poster} />;
      })}
    </>
  );
}
