import { movieApi } from "./movieApi";

export const movieService = {
  getNowPlayingMovies: () => {
    return movieApi.get("/NowPlayingMovies");
  },
  getComingSoonMovies: () => {
    return movieApi.get("/ComingSoonMovies");
  },
};
