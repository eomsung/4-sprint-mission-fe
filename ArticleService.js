const BASE_URL = "https://sprint-mission-api.vercel.app/articles";

export const getArticle = (id) => {
  if (!id || !Number.isInteger(id) || id < 0) {
    console.error("Invalid ID");
  }
  fetch(`${BASE_URL}/${id}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: response status is ${res.status}`);
      }
      return res.json();
    })
    .then((article) => console.log(article))
    .catch((e) => console.log(e.message));
};

export const getArticleList = (page = 1, pageSize = 100, keyword = "") => {
  if (!Number.isInteger(page) || page < 1) {
    console.error("Invalid page");
  }
  if (!Number.isInteger(pageSize) || pageSize < 1) {
    console.error("Invalid pageSize");
  }
  fetch(`${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: response status is ${res.status}`);
      }
      return res.json();
    })
    .then((list) => console.log(list))
    .catch((e) => console.log(e.message));
};

export const createArticle = (title, content, image) => {
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
    .then((article) => console.log(article))
    .catch((e) => console.log(e.message));
};
export const patchArticle = (id, title, content, image) => {
  if (!id || !Number.isInteger(id) || id < 0) {
    console.error("Invalid ID");
  }
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
    .then((article) => console.log(article))
    .catch((e) => console.log(e.message));
};

export const deleteArticle = (id) => {
  if (!id || !Number.isInteger(id) || id < 0) {
    console.error("Invalid ID");
  }
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
