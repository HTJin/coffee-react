import axios from "axios";

export type APIResponse<T> = {
  error: string | undefined;
  data: T | undefined;
};
export type TokenType = {
  token: string;
  tokenExp: string;
};

const base = "https://coffee-flask.onrender.com";

export const apiClientNoAuth = () => axios.create({ baseURL: base });
export const apiClientBasicAuth = (email: string, password: string) =>
  axios.create({
    baseURL: base,
    headers: { Authorization: "Bearer " + btoa(email + ":" + password) },
  });
export const apiClientTokenAuth = (token: string) =>
  axios.create({
    baseURL: base,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
