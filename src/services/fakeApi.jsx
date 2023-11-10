import axios from "axios";
import { loadingScreenSlice, store } from "../lib/redux";

export const showtimesApi = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjE4LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzM5ODQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEzNTQ2MDAwfQ.4A7jJib1YUkmnIr-QDcjs_3j1YY0Ft1wPZDfe8qFrqE",
  },
});

export const userApi = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjE4LzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMzM5ODQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEzNTQ2MDAwfQ.4A7jJib1YUkmnIr-QDcjs_3j1YY0Ft1wPZDfe8qFrqE",
  },
});

// Add a request interceptor
showtimesApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const { loadingOn } = loadingScreenSlice.actions;
    store.dispatch(loadingOn());
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(loadingOff());
    console.log("interceptors has errors");
    return Promise.reject(error.message);
  }
);

// Add a response interceptor
showtimesApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const { loadingOff } = loadingScreenSlice.actions;
    setTimeout(() => {
      store.dispatch(loadingOff());
    }, 1000);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(loadingOff());
    console.log("interceptors has errors");

    return Promise.reject(error);
  }
);
