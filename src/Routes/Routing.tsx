import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "../Containers/MainContainer/MainContainer";
import * as RoutePath from "../Entities/RoutePath";
import Popup from "../Components/Popup/Popup";
import { LoginContainer } from "../Components/Login/LoginContainer/LoginContainer";

const Dashboard = React.lazy(() => import("../Containers/Dashboard/Dashboard"));
const UserManagement = React.lazy(
  () => import("../Containers/UserManagement/UserManagement")
);
const Categories = React.lazy(
  () => import("../Containers/Categories/Categories")
);
const Products = React.lazy(() => import("../Containers/Products/Products"));
const Videos = React.lazy(() => import("../Containers/Videos/Videos"));
const Routing = ({}) => {
  const [productId, setProductId] = useState(1);
  return (
    <Routes>
      <Route
        path={RoutePath.MainContainer.URI}
        element={
          <MainContainer
            productId={productId}
            setProductId={setProductId}
            Children={
              <Routes>
                <Route
                  path={RoutePath.Dashboard.URI}
                  element={
                    <Suspense fallback={<div>Loading..</div>}>
                      <Dashboard />
                    </Suspense>
                  }
                />
                <Route
                  path={RoutePath.User_Management.URI}
                  element={
                    <Suspense fallback={<div>Loading..</div>}>
                      <UserManagement />
                    </Suspense>
                  }
                />
                <Route
                  path={RoutePath.Categories.URI}
                  element={
                    <Suspense fallback={<div>Loading..</div>}>
                      <Categories />
                    </Suspense>
                  }
                />
                <Route
                  path={RoutePath.Products.URI}
                  element={
                    <Suspense fallback={<div>Loading..</div>}>
                      <Products product_Id={productId} />
                    </Suspense>
                  }
                />
                <Route
                  path={RoutePath.Videos.URI}
                  element={
                    <Suspense fallback={<div>Loading..</div>}>
                      <Videos />
                    </Suspense>
                  }
                />
              </Routes>
            }
          />
        }
      />
      {/* <Route path="/" element={<Popup />} /> */}
      <Route path={"/"} element={<LoginContainer />}/>
      <Route path={"/forget-password"} element={<LoginContainer />}/>
      <Route path={"/reset-password"} element={<LoginContainer />}/>
      <Route path={"/otp-verification"} element={<LoginContainer />}/>
      

    </Routes>
  );
};

export default Routing;
