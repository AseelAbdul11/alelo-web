import React, { useEffect } from "react";
import "./App.css";
import Routing from "./Routes/Routing";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Axios from "./Axios/Axios";
import { Login, OTP } from "./API/LoginAPI";
import { useMutation } from "react-query";

type LoginRequestBody = {
  country_code: number;
  mobile_number: number;
  otp: number;
  deviceId: string;
};
function App() {
  const LoginAPI = useMutation({
    mutationFn: (val: any) => Login(val),
    onSuccess: (res: any) => {
      // Axios.setAccessToken(res.data.access_token);
      localStorage.setItem("AccessToken", res.data.access_token);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const OtpAPI = useMutation({
    mutationFn: (val: any) => OTP(val),
    onSuccess: (res) => {
      console.log(res, "re");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    (() => {
      Axios.instance.interceptors.response.use(
        (response) => response,
        async (error) => {
          try {
            const request = error.config;
            if (error.response.status === 401) {
              try {
                request._retry = true;
                // LoginAPI.mutate(reqBody);
                console.log("401");
              } catch (err) {
                console.log("session expired");
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
      );
    })();
    const reqBody = {
      country_code: 91,
      mobile_number: 8124380039,
      otp: 255155,
      deviceId:
        "fjmmoz4-RIKV9Y36Q2MtH9:APA91bGXWm82Fw09ZIMS_tJFqT_BXtWUSLoPBvxZut5WnD-…",
    };
    OtpAPI.mutate({
      country_code: 91,
      mobile_number: 8124380039,
    });
    // LoginAPI.mutate(reqBody);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
