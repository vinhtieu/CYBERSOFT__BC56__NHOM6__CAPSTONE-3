import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isPlay: false,
  url: "",
};

const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState,
  reducers: {
    openVideoPlayer: (state) => {
      state.isOpen = true;
    },
    closeVideoPlayer: (state) => {
      state.isOpen = false;
    },
    playVideo: (state) => {
      state.isPlay = true;
    },
    pauseVideo: (state) => {
      state.isPlay = false;
    },
    setVideoURL: (state, actions) => {
      state.url = actions.payload;
    },
  },
});

export default videoPlayerSlice;
