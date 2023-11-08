import axios from "axios";
import { loadingScreenSlice, store } from "../lib/redux";

export const movieApi = axios.create({
  baseURL: "https://64da260ee947d30a260ad89a.mockapi.io",
});

// Add a request interceptor
movieApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const { loadingOn } = loadingScreenSlice.actions;
    store.dispatch(loadingOn());
    console.log("loading on");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
movieApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const { loadingOff } = loadingScreenSlice.actions;
    setTimeout(() => {
      store.dispatch(loadingOff());
      console.log("loading off");
    }, 1500);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
