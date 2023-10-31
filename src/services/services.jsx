import { movieApi } from "./movieApi";

export const movieService = {
  getNowPlayingMovies: () => {
    return movieApi.get("/movies");
  },
  getComingSoonMovies: () => {
    return movieApi.get("/ComingSoonMovie");
  },
};
