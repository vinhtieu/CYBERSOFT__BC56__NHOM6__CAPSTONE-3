import { movieApi } from "./movieApi";

export const movieService = {
  getList: () => {
    return movieApi.get("/movies");
  },
};
