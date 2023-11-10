import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const showtimesSlice = createSlice({
  name: "showtimes",
  initialState,
  reducers: {
    setList: (state, actions) => {
      state.list = actions.payload;
    },
  },
});

export default showtimesSlice;
