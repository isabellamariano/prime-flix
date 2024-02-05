//Host
//https://api.themoviedb.org/3/

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "sua key",
    language: "pt-BR",
  },
});

export default api;
