import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error) => {
//   failedQueue.forEach((promise) => {
//     if (error) {
//       promise.reject(error);
//     } else {
//       promise.resolve();
//     }
//   });

//   failedQueue = [];
// };

// axiosInstance.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalReq = error.config;

//     if (!originalReq) {
//       return Promise.reject(error);
//     }

//     if (
//       error.response?.status !== 401 ||
//       originalReq._retry ||
//       originalReq.url?.includes("/auth/get-accessToken")
//     ) {
//       return Promise.reject(error);
//     }

//     if (isRefreshing) {
//       return new Promise((resolve, reject) => {
//         failedQueue.push({ resolve, reject });
//       }).then(() => axiosInstance(originalReq));
//     }

//     originalReq._retry = true;
//     isRefreshing = true;

//     try {
//       await axiosInstance.get("/auth/get-accessToken");

//       processQueue(null);

//       return axiosInstance(originalReq);
//     } catch (refreshError) {
//       processQueue(refreshError);

//       window.location.replace("/");

//       return Promise.reject(refreshError);
//     } finally {
//       isRefreshing = false;
//     }
//   },
// );
