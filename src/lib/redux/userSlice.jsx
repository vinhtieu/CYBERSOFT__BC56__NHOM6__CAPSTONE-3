import { createSlice } from "@reduxjs/toolkit";
import { LOGGING_IN, LOG_IN, LOGGING_OUT, LOG_OUT } from "../../constant";

const userAccount = localStorage.getItem("currentUser");

const initialState = {
  accountStatus: userAccount ? LOG_IN : LOG_OUT,
  account: JSON.parse(userAccount) || {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccountStatus: (state, action) => {
      state.accountStatus = action.payload;
    },

    setUserAccount: (state, action) => {
      state.account = action.payload;
    },

    resetUser: (state) => initialState,
  },
});

export default userSlice;
