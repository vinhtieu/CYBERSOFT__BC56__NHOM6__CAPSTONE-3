import { configureStore } from "@reduxjs/toolkit";
import { movieListSlice, videoPlayerSlice, navMenuSlice } from "../redux";

export const store = configureStore({
  reducer: {
    movieList: movieListSlice.reducer,
    videoPlayer: videoPlayerSlice.reducer,
    navMenu: navMenuSlice.reducer,
  },
});
