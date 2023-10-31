import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  comingSoonMovies: [],
};

const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setComingSoonMovies: (state, action) => {
      state.comingSoonMovies = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setComingSoonMovies } =
  movieListSlice.actions;

export default movieListSlice.reducer;
