import React, { useEffect } from "react";
import "./App.css";
import Routing from "./Routes/Routing";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Axios from "./Axios/Axios";
import { OTP } from "./API/LoginAPI";
import { useMutation } from "react-query";

type LoginRequestBody = {
  country_code: number;
  mobile_number: number;
  otp: number;
  deviceId: string;
};
function App() {
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
    OtpAPI.mutate({
      country_code: 91,
      mobile_number: 8124380039,
    });
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
