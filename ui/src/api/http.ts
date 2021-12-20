import axios from 'axios';

const {
  REACT_APP_SHIP_MANAGEMENT_API_URL: baseURL,
  REACT_APP_REQUEST_TIMEOUT: timeout
} = process.env;

const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: timeout ? parseInt(timeout, 10) : 180000
});

interface ExtraHeaders {
  bearer?: string;
}

export const extraHeaders = ({ bearer }: ExtraHeaders) => {
  const headers = {} as any;
  if (bearer) {
    headers['Authorization'] = `BEARER ${bearer}`;
  }
}

export default http;
