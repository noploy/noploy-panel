import axios, { AxiosError } from 'axios';


export const api = axios.create({
  baseURL: 'http://localhost:8080',
  // headers: {
  //   Authorization: `Bearer ${cookies['noploy.token']}`
  // }
});