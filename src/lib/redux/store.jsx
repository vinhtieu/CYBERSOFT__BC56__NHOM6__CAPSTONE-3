import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./movieListSlice";

export const store = configureStore({
  reducer: {
    movieList: movieListSlice,
  },
});
