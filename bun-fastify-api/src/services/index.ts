import { config } from "dotenv";
import axios from "axios";

config();
const { CAT_API_URL, BORED_API_URL } = process.env;

export const urls = {
  catsApi: CAT_API_URL ?? 'https://catfact.ninja',
  boredApi: BORED_API_URL ?? 'https://www.boredapi.com/api'
}

export const catsApi = axios.create({
  baseURL: urls.catsApi
});

export const boredApi = axios.create({
  baseURL: urls.boredApi
});
