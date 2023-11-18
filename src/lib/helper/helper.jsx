import { NOW_PLAYING, COMING_SOON } from "../../constant";

export const removeDuplicate = (data) => {
  const list = data.reduce((list, movie) => {
    list[movie.title] = movie;
    return list;
  }, {});

  // convert the object back to an array
  return Object.values(list);
};

const extractDataByKey = (data, key) => {
  let list = [];

  data.forEach((cinema) => {
    cinema.branchList.forEach((branch) => {
      branch.movieList.forEach((movie) => {
        switch (key) {
          case NOW_PLAYING:
            if (movie.nowPlaying) list.push(movie);
            break;
          case COMING_SOON:
            if (movie.comingSoon) list.push(movie);
            break;
        }
      });
    });
  });

  return list;
};

export const getNowPlayingMovies = (data) => {
  const list = extractDataByKey(data, NOW_PLAYING);
  return removeDuplicate(list);
};

export const getComingSoonMovies = (data) => {
  const list = extractDataByKey(data, COMING_SOON);
  return removeDuplicate(list);
};
