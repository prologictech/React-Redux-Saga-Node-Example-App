import axios from "axios";

import { apis } from '../constants'

const api = axios.create({
  baseURL: apis.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
  Intercept requests and responses from apis
 **/

/* api requests */
api.interceptors.request.use(
  async (request) => {
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);
/* api responses */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;