import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  searchKey: "cgv-aeon-tan-phu",
};

const showtimesSlice = createSlice({
  name: "showtimes",
  initialState,
  reducers: {
    setList: (state, actions) => {
      state.list = actions.payload;
    },
    setSearchKey: (state, actions) => {
      state.searchKey = actions.payload;
    },
  },
});

export default showtimesSlice;
