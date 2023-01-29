import axios from "axios";

const apiKey = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: apiKey,
});