import axios from "axios";

const basePath = "https://api.openalex.org";

// axios.defaults.baseURL = basePath;

export const api = {
  getWorks: (queryString) =>
    axios(`${basePath}/works?filter=${queryString}`).then((res) => res.data),
};
