import axios from "axios";
export const API_URL = "http://localhost:3000/api";
export const connector = axios.create({ baseURL: API_URL });
const token = localStorage.getItem("token");
connector.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

connector.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
