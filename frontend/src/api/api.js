import axios from 'axios';
import { API_URL } from '../utils/constants';

const api = axios.create({
  baseURL: `${API_URL}`
});

api.interceptors.response.use(
  response => {
    return Promise.resolve(response.data);
  },
  function(error) {
    return Promise.reject(error.response);
  }
);

export default api;
