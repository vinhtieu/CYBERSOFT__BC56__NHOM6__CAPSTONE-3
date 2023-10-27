import axios from "axios";
export const movieApi = axios.create({
  baseURL: "https://64da260ee947d30a260ad89a.mockapi.io",
});
