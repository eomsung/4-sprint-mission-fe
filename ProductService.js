const BASE_URL = "https://sprint-mission-api.vercel.app/products";

export const getProduct = async (id) => {
  try {
    if (!id || !Number.isInteger(id) || id < 0) {
      throw new Error("Invalid ID");
    }
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.log(e.message);
  }
};

export const getProductList = async (
  page = 1,
  pageSize = 100,
  keyword = ""
) => {
  try {
    if (!Number.isInteger(page) || page < 1) {
      throw new Error("Invalid page");
    }
    if (!Number.isInteger(pageSize) || pageSize < 1) {
      throw new Error("Invalid pageSize");
    }
    const res = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.log(e.message);
  }
};

export const createProduct = async (
  name,
  description,
  price,
  manufacturer,
  tags,
  images
) => {
  try {
    if (!Array.isArray(tags)) {
      throw new Error("Invalid tags");
    }
    if (!Array.isArray(images)) {
      throw new Error("Invalid images");
    }
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price,
        manufacturer,
        tags,
        images,
      }),
    });
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.log(e.message);
  }
};
export const patchProduct = async (
  id,
  name,
  description,
  price,
  manufacturer,
  tags,
  images
) => {
  try {
    if (!id || !Number.isInteger(id) || id < 0) {
      throw new Error("Invalid ID");
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
        manufacturer,
        tags,
        images,
      }),
    });
    if (!res.ok) {
      throw new Error(`Error: response status is ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    if (!id || !Number.isInteger(id) || id < 0) {
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
