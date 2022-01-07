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

type SP_Domain = 'CDH' | 'AETEC';
type Auth_Bearer = string | undefined;

interface ExtraHeaders {
  bearer?: Auth_Bearer;
  domain?: SP_Domain;
};

export const extraHeaders = ({bearer, domain = 'CDH'}: ExtraHeaders) => {
  const headers: any = {
    'Content-Type': 'application/json',
    'cp-site-domain': domain
  };
  if (bearer) {
    headers['Authorization'] = `BEARER ${bearer}`;
  }
  return headers;
}

export default http;