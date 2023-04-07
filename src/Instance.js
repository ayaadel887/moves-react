import axios from "axios";

export const Instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/",
});
