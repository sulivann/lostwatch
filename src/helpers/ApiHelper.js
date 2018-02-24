import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ silent: true });

const config = {
  baseURL: `${process.env.REACT_APP_API_URL}api/v2/`,
  timeout: 2000,
};

const api = axios.create(config);

export default api;
