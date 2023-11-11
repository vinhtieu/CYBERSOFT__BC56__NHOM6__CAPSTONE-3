import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  nowPlayingMovies: [],
  comingSoonMovies: [],
  trendingMovies: [
    //Peaky Blinders
    {
      poster:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTh-QB9EbkineCZs98hzt9lg775u6gE_D6TPMudqtOg8hCB5Z8GiJZaMvr-vokSVYOMy1rHbHUH9J4Wp9B47ngoPdfxBUAFLKUrc.webp?r=15c",
      trailer: "https://www.youtube.com/watch?v=Ruyl8_PT_y8",
      title:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcXTmmOXbe4TCwYgRHEDjm_C7Dp36vhx1vKM4Gkg-bqzBygMPU3B_cI-84lz_Q0zG5yeIEAOyo6g3Z053MoUHKPvfIuboTDdCpv9uGC8nFA59063z51innh4C1GScFZ75q99Snh0OcIi0J3hvD18ZtCDVN7BkUYQ7pcfLayDZmWJKDL4ejnEXg.webp?r=216",
    },
    // Ballerina
    {
      poster:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVczEI6ymszvInPms8SpQVrIOltOHwaAdpr077e3s0n_lc5lihm2j-FuoJUUYGxyLUTjZw1FvamFCAkxlGGWhXzetoGnjaCRorXQ.webp?r=8d6",
      trailer: "https://www.youtube.com/watch?v=IhXfUTGVEUI",
      title:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfiWsd46_yQHqvlU4O1ZK7JM56WgzF-5MiEUll6ZbKV8IgTx3r5AUsntt_S2ZY0buUT8RlvMTt5SPviGo6BeCLEj6C0lOucuWXjQ9-gqrCjhz5xojSZJiAFY3GjgpBwVkUf3Hwp4M33wBSWsVmmAMVkKeXf8IjaTXKCjNefkZFg4uKOkFEXw.webp?r=1e1",
    },
    // My Name
    {
      poster:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXFOK1gLfZ0Zd-m0jYIezmZrWk8w1nn8pNLm7206ooSlcsrCU0hiBcvObamHsdyeZxWauNJboUepjjSlE2VKvZjaOkwQR3QudPez.webp?r=824",
      trailer: "https://www.youtube.com/watch?v=ZOl7iOrD31Q",
      title:
        "https://occ-0-58-64.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABej7QwW4jFaixPFYk98693LIbeSt9WLs6gRLOkpfqkIrlbsMM_ROWk6rL4YF_WprfsTdSD_H_Vu-mzZJn8I1EaiF6-ibCTncjslALLh9a6m9CVgg7HcTwm0J1LcWmR3yoYxiZxueSDMuFjLGStHHU5okqDOe2ddUAAf0Nf1gRGb8iXT2ziD7.webp?r=5e8",
    },
    //John Wick
    {
      poster: "https://images3.alphacoders.com/103/thumb-1920-1033561.jpg",
      trailer: "https://www.youtube.com/watch?v=ChpLV9AMqm4",
      title:
        "https://www.themoviedb.org/t/p/original/9F3H3K1nOxVOHoDZk1pgkEYwGdT.png",
    },
  ],
};

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    setData: (state, actions) => {
      state.data = actions.payload;
    },
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setComingSoonMovies: (state, action) => {
      state.comingSoonMovies = action.payload;
    },
  },
});

export default cinemaSlice;
