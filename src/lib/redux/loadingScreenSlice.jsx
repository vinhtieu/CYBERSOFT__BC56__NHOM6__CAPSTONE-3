import { createSlice } from "@reduxjs/toolkit";

const cinemaData = sessionStorage.getItem("cinema_data");

const initialState = {
  isOn: cinemaData ? true : false,
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
