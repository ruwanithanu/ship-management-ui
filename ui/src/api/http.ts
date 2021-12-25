import axios from 'axios';

const {
  REACT_APP_SVC_URL: baseURL,
  REACT_APP_REQUEST_TIMEOUT: timeout
} = process.env;

const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: timeout ? parseInt(timeout, 10) : 180000
});

export default http;
