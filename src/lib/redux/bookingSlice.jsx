import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectSeat: (state, action) => {},
  },
});

export const { selectSeat } = bookingSlice.actions;

export default bookingSlice.reducer;
