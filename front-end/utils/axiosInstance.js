import axios from 'axios';

export const instance = axios.create({
  baseURL:"/api/auth/",
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const instanceRestaurant = axios.create({
  baseURL: process.env.RESTAURANTS_API,
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const instancePlat = axios.create({
  baseURL: process.env.PLATS_API,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const instanceCommandes = axios.create({
  baseURL: '/api/commandes',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const instanceUsers = axios.create({
  baseURL: process.env.USERS_API,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
