import axios from "axios";

export const catsApi = axios.create({
  baseURL: 'https://catfact.ninja'
});

export const boredApi = axios.create({
  baseURL: 'https://www.boredapi.com/api'
})
