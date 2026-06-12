import axios from "axios";

const api = axios.create({
  baseURL: "https://api.vishalborle.online", // Your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
