import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ecomm-store-mern.herokuapp.com/api/",
});
