import React from "react";
import * as Endpoints from "../Entities/Endpoints";
import Axios from "../Axios/Axios";

const API = Axios.getInstance;

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
