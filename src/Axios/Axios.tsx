import axios from "axios";

export default (() => {
  const token = localStorage.getItem("AccessToken");
  console.log(token, "toke");

  const instance = axios.create({
    headers: {
      "Accept-Language": "en-US",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MS04MTI0MzgwMDM5IiwiZXhwIjoxNzE5MjI0MTExLCJpYXQiOjE3MTcxNTA1MTF9.sgLRDv4PIPmj-J3P39mbM6TA3vpnBaeUth-bWP_hUkg`,
    },
  });

  const getInstance = (url: any) => {
    instance.defaults.baseURL = url;
    instance.defaults.headers.common["Content-Type"] = "application/json";
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
    // setAccessToken: (url: any) => setAccessToken(url),
    instance: instance,
  };
})();
