import { createSlice } from "@reduxjs/toolkit";
import { PAGE } from "../../constant";

const initialState = {
  isOpen: false,
  onPage: PAGE.HOME,
};

const navMenuSlice = createSlice({
  name: "navMenu",
  initialState,
  reducers: {
    toggleNavMenu: (state, actions) => {
      if (typeof actions.payload === "boolean") {
        state.isOpen = actions.payload;
      } else {
        const status = state.isOpen;
        state.isOpen = !status;
      }
    },
    setPage: (state, actions) => {
      state.onPage = actions.payload;
    },
  },
});

export default navMenuSlice;
