const BASE_URL = "https://sprint-mission-api.vercel.app/articles";

const getArticle = (id) => {
  fetch(`${BASE_URL}/${id}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: response status is ${res.status}`);
      }
      return res.json();
    })
    // .then((article) => console.log(article))
    .catch((e) => console.log(e.message));
};

const getArticleList = (page = 1, pageSize = 100, keyword = "") => {
  fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: response status is ${res.status}`);
      }
      return res.json();
    })
    // .then((list) => console.log(list))
    .catch((e) => console.log(e.message));
};

const createArticle = (title, content, image) => {
  fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: response status is ${res.status}`);
      }
      return res.json();
    })
    .catch((e) => console.log(e.message));
};
const patchArticle = (id, title, content, image) => {
  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: response status is ${res.status}`);
      }
      return res.json();
    })
    .catch((e) => console.log(e.message));
};

const deleteArticle = (id) => {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: response status is ${res.status}`);
      }
    })
    .catch((e) => console.log(e.message));
};
