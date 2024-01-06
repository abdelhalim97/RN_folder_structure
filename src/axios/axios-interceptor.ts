import axios from 'axios';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: Config.CAT_API_URL, // Replace with your API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // const token = localStorageService.getAccessToken()//get token from async storage
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`
    // }
    config.headers['x-api-key'] = Config.CAT_API_KEY;
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default axiosInstance;
