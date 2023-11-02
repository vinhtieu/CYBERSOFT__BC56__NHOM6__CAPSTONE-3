import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./movieListSlice";
import videoPlayerSlice from "./videoPlayerSlice";

export const store = configureStore({
  reducer: {
    movieList: movieListSlice.reducer,
    videoPlayer: videoPlayerSlice.reducer,
  },
});
