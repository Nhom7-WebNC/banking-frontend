import axios from "axios";
export const API_URL = "http://localhost:8001/api";
export const connector = axios.create({ baseURL: API_URL });
// const getNewAccessToken = () => {
//   connector.
// };
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
  (resp) => resp.data,
  (error) => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 401:
          // return getNewAccessToken().then(() => {
          //   const newtoken = localStorage.getItem("accessToken");
          //   error.config.headers["Authorization"] = `Bearer ${newtoken}`;
          //   Promise.resolve(axios(error.config));
          // });
          break;
        case 403:
        case 405:
        case 404:
        case 500:
        case 503:
          break;
        default:
          break;
      }
    } else {
      // history.push({
      //   pathname: "/login",
      //   state: {
      //     status: 500,
      //     statusText: "Internal Server Error",
      //   },
      // });
    }

    return Promise.reject(error);
  }
);
