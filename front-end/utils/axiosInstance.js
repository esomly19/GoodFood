import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const instanceRestaurant = axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const instancePlat = axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
