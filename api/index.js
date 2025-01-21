import axios from "axios";

const baseURL = "http://localhost:3100";
// const baseURL = "https://four-sprint-mission-be-1.onrender.com";

const client = axios.create({
  baseURL,
});

// 게시글 관련 api
const getArticles = async (keyword = "", order = "recent") => {
  const options = {
    params: {
      keyword,
      orderBy: order,
    },
  };
  const url = `/article`;
  const response = await client.get(url, options);
  const data = response.data;
  return data;
};

const getArticle = async (id) => {
  const url = `/article/${id}`;
  const response = await client.get(url);
  const data = response.data;
  return data;
};

const createArticle = async (newArticle) => {
  const url = `/article`;
  const response = await client.post(url, newArticle);
  const data = response.data;
  return data;
};

const deleteArticle = async (id) => {
  const url = `/article/${id}`;
  const response = await client.delete(url);
  const data = response.data;
  return data;
};

const patchArticle = async (id, article) => {
  const url = `/article/${id}`;
  const response = await client.patch(url, article);
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

const deleteComment = async (id) => {
  const url = `article/${id}/comment`;
  const response = await client.delete(url);
  const data = response.data;
  return data;
};

const patchComment = async (id, content) => {
  const url = `article/${id}/comment`;
  const response = await client.patch(url, { content });
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

// 로그인 관련 api
const codeitURL = "https://panda-market-api.vercel.app";

export const codeitClient = axios.create({
  baseURL: codeitURL,
});

const signUp = async (dto) => {
  const url = "/auth/signUp";
  const response = await codeitClient.post(url, dto);
  const data = response.data;
  return data;
};

const logIn = async (dto) => {
  const url = "/auth/signIn";
  const response = await codeitClient.post(url, dto);
  const data = response.data;

  const { accessToken, refreshToken } = data;
  codeitClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
  localStorage.setItem("refreshToken", refreshToken);

  return data;
};

const refreshToken = async (prevRefreshToken) => {
  const url = "/auth/refresh-token";
  const response = await codeitClient.post(url, {
    refreshToken: prevRefreshToken,
  });
  const data = response.data;
  const { accessToken } = data;
  codeitClient.defaults.headers.Authorization = `Bearer ${accessToken}`;

  return data;
};

const api = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  patchArticle,
  createComment,
  getComments,
  deleteComment,
  patchComment,
  getProduct,
  signUp,
  logIn,
  refreshToken,
};

export default api;
