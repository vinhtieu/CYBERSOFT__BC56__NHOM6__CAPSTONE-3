import { configureStore } from "@reduxjs/toolkit";
import {
  videoPlayerSlice,
  navMenuSlice,
  loadingScreenSlice,
  cinemaSlice,
} from "../redux";

export const store = configureStore({
  reducer: {
    videoPlayer: videoPlayerSlice.reducer,
    navMenu: navMenuSlice.reducer,
    loadingScreen: loadingScreenSlice.reducer,
    cinema: cinemaSlice.reducer,
  },
});
