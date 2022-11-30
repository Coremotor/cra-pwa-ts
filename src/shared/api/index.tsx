import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { config } from "config/config";
import { store } from "store/store";
import { setIsLoading } from "store/modules/loading/reducer";
import { Toast } from "antd-mobile";
import { LocalStorageTokenKey } from "shared/api/localStorage";

export const request = axios.create({
  baseURL: config.baseUrl,
  responseType: "json",
});

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    store.dispatch(setIsLoading(true));

    const token = localStorage.getItem(LocalStorageTokenKey);
    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    store.dispatch(setIsLoading(false));
    if (error) {
      Toast.show("api error in request");
      console.log("api error in request", JSON.stringify(error.response));
    }
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    store.dispatch(setIsLoading(false));
    return response;
  },
  function (error: AxiosError) {
    store.dispatch(setIsLoading(false));
    if (error) {
      console.log("api error in response", JSON.stringify(error.response));
      Toast.show("api error in response");
    }
    // if (
    //   (error.response && error.response.data.error === "Unauthorized") ||
    //   (error.response && error.response.data.error === "Access denied")
    // ) {
    //   localStorage.removeItem(LocalStorageTokenKey);
    // }
    return Promise.reject(error);
  }
);
