import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend's URL
});

// Optionally, add interceptors for tokens or headers if needed
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
