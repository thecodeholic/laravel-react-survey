import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
  return config;
})

axiosClient.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    router.navigate('/login')
  } else if (error.response.status === 404) {
    // Show 404
  }
  throw error;
})

export default axiosClient;
