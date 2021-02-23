import Axios, { AxiosInstance } from 'axios';
import { config } from '../config';

/**
 * HTTP client
 */
export const httpClient: AxiosInstance = Axios.create({
  baseURL: config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
