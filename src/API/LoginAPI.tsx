import React from "react";
import * as Endpoints from "../Entities/Endpoints";
import Axios from "../Axios/Axios";

const API = Axios.getInstance;

export const Login = (data: any) => {
  const url = Endpoints.LOGIN;

  return API(Endpoints.API_ENDPOINT)
    .post(url, data)
    .then((response) => response)
    .catch((err) => ({ err }));
};

export const OTP = (data: any) => {
  const url = Endpoints.OTP;

  return API(Endpoints.API_ENDPOINT)
    .post(url, data)
    .then((response) => response)
    .catch((err) => ({ err }));
};
