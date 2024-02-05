//Host
//https://api.themoviedb.org/3/

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

axios.defaults.params = {};
axios.defaults.params["api_key"] = "Sua Key";
axios.defaults.params["language"] = "pt-BR";

export default api;
