import React from "react";
import * as Endpoints from "../Entities/Endpoints";
import Axios from "../Axios/Axios";

const API = Axios.getInstance;
const APIFORMDATA = Axios.getFormDataInstance;

export const getAllProductCategories = () => {
  const url = Endpoints.GET_ALL_PRODUCT_CATEGORIES;

  return API(Endpoints.API_ENDPOINT)
    .get(url)
    .then((response) => response)
    .catch((err) => ({ err }));
};

export const getProductsById = (product_Id: any) => {
  const url =
    Endpoints.GET_PRODUCTS_BY_ID + `/${product_Id}` + Endpoints.PRODUCTS;

  return API(Endpoints.API_ENDPOINT)
    .get(url)
    .then((response) => response)
    .catch((err) => [err]);
};

export const AddProduct = (data: any) => {
  const url = Endpoints.ADD_PRODUCT;

  return API(Endpoints.API_ENDPOINT)
    .post(url, data)
    .then((response) => response)
    .catch((err) => ({ err }));
};
export const AddProductImage = (data: any) => {
  const { product_Id, photo } = data;
  const url = Endpoints.ADD_PRODUCT_IMAGE + `/${product_Id}` + Endpoints.PHOTO;
  console.log(product_Id, photo, "prod");
  const reqBody = {
    photo: photo,
  };

  return APIFORMDATA(Endpoints.API_ENDPOINT)
    .post(url, reqBody)
    .then((response) => response)
    .catch((err) => err);
};

export const editProduct = (data: any, productId: any) => {
  const url = Endpoints.PRODUCTS + `/${productId}`;
  console.log(data, productId, "data appi");

  return API(Endpoints.API_ENDPOINT)
    .put(url, data)
    .then((response) => response)
    .catch((err) => ({ err }));
};
