import axios from "axios";

// Your backend API URL
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/";

const api = axios.create({
  baseURL: API_URL,
});

// Attach JWT token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token"); // store token here after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
