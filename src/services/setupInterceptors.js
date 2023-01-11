import TokenService from "./token.service";
// import axios from "axios";
import api2 from "./api2"
// const axiosInstance = axios.create({
//     baseURL: "http://127.0.0.1:8000/",
//     headers: {
//       "Content-Type": "application/json",
//     },
// });
  
const setup = (store) => {
  api2.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // const { dispatch } = store;
  
  api2.interceptors.response.use(
    (res) => {
      return res;
    },
    
    async (err) => {
      const originalConfig = err.config;

      // sigin
      if (originalConfig.url !== "api/token/" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await api2.post("api/token/refresh/", {
              refresh: TokenService.getLocalRefreshToken(),
            });

            // const { accessToken } = rs.data;

            // dispatch(refreshToken(accessToken));
            TokenService.setUser(rs.data);

            return api2(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;