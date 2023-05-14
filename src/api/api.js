import axios from "axios";

const PAGE_SIZE = 5;

const basePath = "https://api.openalex.org";

export const api = {
  getWorks: (queryString, page = 1) =>
    axios(
      `${basePath}/works?page=${page}&per-page=${+PAGE_SIZE}&filter=${queryString}`
    ).then((res) => res.data),
};
