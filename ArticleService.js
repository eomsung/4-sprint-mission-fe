const BASE_URL = "https://sprint-mission-api.vercel.app/articles";

const getArticle = async (id) => {
  try {
    if (!id) {
      throw new Error("For 'id': Required field is not provided.");
    }
    const res = await fetch(`${BASE_URL}id=${id}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return res.json();
  } catch (e) {
    console.log(e.message);
  }
};

const getArticleList = async (page = 1, pageSize = 100, keyword = "") => {
  try {
    const res = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return res.json();
  } catch (e) {
    console.log(e.message);
  }
};

const createArticle = async (title, content, image) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        image,
      }),
    });
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return res.json();
  } catch (e) {
    console.log(e.message);
  }
};
const patchArticle = async (id, title, content, image) => {
  try {
    if (!id) {
      throw new Error("For 'id': Required field is not provided.");
    }
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        image,
      }),
    });
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return res.json();
  } catch (e) {
    console.log(e.message);
  }
};

const deleteArticle = async (id) => {
  try {
    if (!id) {
      throw new Error("For 'id': Required field is not provided.");
    }
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
  } catch (e) {
    console.log(e.message);
  }
};
