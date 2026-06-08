import axios from "axios";

const API = "https://2ae61cde2e21f8bf.mokky.dev/products";

export const getProducts = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const createProduct = async (product) => {
  const res = await axios.post(API, product);
  return res.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API}/${id}`);
};
