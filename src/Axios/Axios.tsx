import axios from "axios";

export default (() => {
  const token = localStorage.getItem("AccessToken");
  console.log(token, "toke");

  const instance = axios.create({
    headers: {
      "Accept-Language": "en-US",
      Authorization: `Bearer ${token}`,
    },
  });

  const getInstance = (url: any) => {
    instance.defaults.baseURL = url;
    instance.defaults.headers.common["Content-Type"] = "application/json";
    return instance;
  };

  const getFormDataInstance = (url: any) => {
    instance.defaults.baseURL = url;
    instance.defaults.headers.common["Content-Type"] = "multipart/form-data";
    return instance;
  };
  // const setAccessToken = (token: any) => {
  //   if (token) {
  //     instance.defaults.headers.common.Authorization = "Bearer " + token;
  //   } else {
  //     instance.defaults.headers.common.Authorization = "Bearer" + ;
  //   }
  // };

  return {
    getInstance: (url: any) => getInstance(url),
    getFormDataInstance: (url: any) => getFormDataInstance(url),
    // setAccessToken: (url: any) => setAccessToken(url),
    instance: instance,
  };
})();
