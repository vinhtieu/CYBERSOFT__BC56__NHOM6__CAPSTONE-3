import exp from "constants";
import { movieApi } from "./movieApi";
import { showtimesApi, userApi } from "./fakeApi";

export const movieService = {
  getNowPlayingMovies: () => {
    return movieApi.get("/NowPlayingMovies");
  },
  getComingSoonMovies: () => {
    return movieApi.get("/ComingSoonMovies");
  },
};

export const showtimesService = {
  getData: () => {
    return showtimesApi.get("/api/QuanLyNguoiDung/DangNhap");
  },
};

export const userService = {
  login: (value) => {
    return userApi.post("/api/QuanLyNguoiDung/DangNhap", value);
  },
};
