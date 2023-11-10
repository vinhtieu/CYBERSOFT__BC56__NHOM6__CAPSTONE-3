import { movieApi } from "./movieApi";
import { showtimesApi } from "./showtimesApi";

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
    return showtimesApi.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
    );
  },
  // setData: () => {
  //   return theaterApi.get(
  //     "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
  //   );
  // },

  // getComingSoonMovies: () => {
  //   return theaterApi.get("/ComingSoonMovies");
  // },
};
