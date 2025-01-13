import axios from "axios";

const baseURL = "http://localhost:3100";

const client = axios.create({
  baseURL,
});

const getArticle = async () => {
  const url = "/article";
  const response = await client.get(url);
  const data = response.data;
  return data;
};

const getProduct = async () => {
  const url = "/products";
  const response = await client.get(url);
  const data = response.data;
  return data;
};

const api = {
  getArticle,
  getProduct,
};

export default api;
