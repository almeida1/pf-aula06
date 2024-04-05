import axios from "axios";
const url = "http://localhost:4000/produtos";
export const listaDeProdutos = () => axios.get(url);
export const cadastroDeProduto = (produto) => axios.post(url, produto);
export const obtemProduto = (produtoId) => axios.get(url + `/` + produtoId);
export const updateProduto = (produtoId, produto) =>
  axios.put(url + "/" + produtoId, produto);
export const deleteProduto = (produtoId) => axios.delete(url + "/" + produtoId);
export const upload = (formData) => axios.post(url, formData);
