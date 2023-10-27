import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setList } = movieListSlice.actions;

export default movieListSlice.reducer;
