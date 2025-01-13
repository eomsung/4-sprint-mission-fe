import axios from "axios";

const baseURL = "http://localhost:3100";

const client = axios.create({
  baseURL,
});

// 게시글 관련 api
const getArticles = async (keyword = "", order = "recent") => {
  const url = `/article?keyword=${keyword}&orderBy=${order}`;
  const response = await client.get(url);
  const data = response.data;
  return data;
};

const getArticle = async (id) => {
  const url = `/article/${id}`;
  const response = await client.get(url);
  const data = response.data;
  return data;
};

const createComment = async (id, content) => {
  const url = `/article/${id}/comment`;
  const response = await client.post(url, { content });
  const data = response.data;
  return data;
};

const getComments = async (id) => {
  const url = `article/${id}/comments`;
  const response = await client.get(url);
  const data = response.data;
  return data;
};

// 상품 관련 api
const getProduct = async () => {
  const url = "/products";
  const response = await client.get(url);
  const data = response.data;
  return data;
};

const api = {
  getArticles,
  getArticle,
  createComment,
  getComments,
  getProduct,
};

export default api;
