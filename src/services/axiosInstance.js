import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { API_ENDPOINT } from "../config/config";
import TokenService from "./token.service";

const baseURL = API_ENDPOINT;

let authTokens = TokenService.getUser() || "";
// console.log(authTokens)
const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authTokens.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    authTokens = TokenService.getUser() || "";
    req.headers.Authorization = `Bearer ${authTokens.access}`;
  }

  const user = jwt_decode(authTokens.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) return req;

  const response = await axios.post(`${baseURL}api/token/refresh/`, {
    refresh: authTokens.refresh,
  });

  TokenService.setUser(response.data);
  req.headers.Authorization = `Bearer ${response.data.access}`;
  return req;
});

export default axiosInstance;
