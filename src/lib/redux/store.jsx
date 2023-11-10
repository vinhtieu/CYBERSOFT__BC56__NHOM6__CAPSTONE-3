import { configureStore } from "@reduxjs/toolkit";
import {
  movieListSlice,
  videoPlayerSlice,
  navMenuSlice,
  loadingScreenSlice,
  showtimesSlice,
} from "../redux";

export const store = configureStore({
  reducer: {
    movieList: movieListSlice.reducer,
    videoPlayer: videoPlayerSlice.reducer,
    navMenu: navMenuSlice.reducer,
    loadingScreen: loadingScreenSlice.reducer,
    showtimes: showtimesSlice.reducer,
  },
});
