import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOn: false,
};

const loadingScreenSlice = createSlice({
  name: "loadingScreen",
  initialState,
  reducers: {
    loadingOn: (state) => {
      state.isOn = true;
    },
    loadingOff: (state) => {
      state.isOn = false;
    },
  },
});

export default loadingScreenSlice;
