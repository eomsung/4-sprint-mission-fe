const BASE_URL = "https://sprint-mission-api.vercel.app/products";

const getProduct = async (id) => {
  try {
    if (!id) {
      throw new Error("For 'id': Required field is not provided.");
    }
    const res = await fetch(`${BASE_URL}?id=${id}`, {
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

const getProductList = async (page = 1, pageSize = 100, keyword = "") => {
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

const createProduct = async (name, description, price, tag, images) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price,
        tag,
        images,
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
const patchProduct = async (id, name, description, price, tag, images) => {
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
        name,
        description,
        price,
        tag,
        images,
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

const deleteProduct = async (id) => {
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