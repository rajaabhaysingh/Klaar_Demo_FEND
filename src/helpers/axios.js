import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "https://vast-shore-74260.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    mode: "no-cors",
    withCredentials: false,
  },
});

axiosIntance.interceptors.request.use((req) => {
  return req;
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

export default axiosIntance;
