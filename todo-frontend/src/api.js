import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Replace with your actual API domain
  timeout: 10000, // Optional: Set a timeout for requests
  // You can also add custom headers or other configurations here
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Modify the config object to add headers or make other changes
    config.headers["token"] = localStorage.getItem("token"); // Replace with your header info
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err.response.status);
    // If Unauthorized error, return it
    if (err.response.status === 401) return (window.location.href = "/");
  }
);

export default instance;
