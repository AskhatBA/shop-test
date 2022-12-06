import axios from "axios";

export const request = axios.create({
  baseURL: process.env.REACT_APP_API,
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error;
  }
);
