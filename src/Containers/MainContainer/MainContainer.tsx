import React, { Fragment, useEffect, useRef, useState } from "react";
import "../../Styles/MainContainer.css";
import aLeLo_Logo from "../../Assets/aLeLo_Logo.svg";
import bell_icon from "../../Assets/bell.svg";
import * as MainContainerTypes from "../../Entities/MainContainerTypes";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField/InputField";
import { useDispatch } from "react-redux";
import { searchCategory } from "../../Slices/CategorySlice";
import "../../Styles/Tab.css";
import { Tab, Tabs } from "@mui/material";
import { useMutation } from "react-query";
import { getAllProductCategories } from "../../API/ProductsAPI";

interface Props {
  Children: any;
  productId: any;
  setProductId: React.Dispatch<React.SetStateAction<any>>;
}
interface NavHeaderHeight {
  height: number;
  computedStyle: CSSStyleDeclaration | null;
  width: number;
}
const MainContainer: React.FC<Props> = ({
  Children,
  productId,
  setProductId,
}) => {
  const dispatch = useDispatch();

  const [ScreenPath, setScreenPath] = useState("");
  const [productCategories, setProductCategories] = useState([]);
  const [value, setValue] = React.useState(1);
  const [Header, setHeader] = useState();

  const [mainNavHeaderHeight, setMainNavHeaderHeight] =
    useState<NavHeaderHeight>({
      height: 0,
      computedStyle: null,
      width: 0,
    });
  const windowHeight = window.innerHeight;
  const mainNavWebRef = useRef<HTMLDivElement>(null);
  const appContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", function () {
      const handleResize = () => {
        if (mainNavWebRef.current) {
          const height = mainNavWebRef.current.clientHeight;
          const computedStyle = getComputedStyle(mainNavWebRef.current);
          const width = mainNavWebRef.current.clientWidth;

          setMainNavHeaderHeight({ height, computedStyle, width });
        }
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
    getAllProductCategoriesAPi.mutate();
  }, []);

  const getAllProductCategoriesAPi = useMutation({
    mutationFn: () => getAllProductCategories(),
    onSuccess: (res: any) => {
      if (res.data) {
        setProductCategories(res.data);
      }
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  const Navigate = useNavigate();
  const handleSideBar = (routePath: string) => {
    getScreenPath();
    Navigate(routePath);
  };

  useEffect(() => {
    setScreenPath(getScreenPath());
  }, [window.location.pathname]);

  useEffect(() => {
    if (ScreenPath) {
      let header: any = MainContainerTypes?.MENU_ITEMS?.find(
        (item) => item.routePath == ScreenPath
      );
      setHeader(header.menu);
    }
  }, [ScreenPath]);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateHeight = () => {
    setScreenHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateHeight);

    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [screenHeight]);

  useEffect(() => {
    if (mainNavWebRef?.current && appContainerRef?.current) {
      setMainNavHeaderHeight({
        height: mainNavWebRef?.current?.clientHeight,
        computedStyle: getComputedStyle(mainNavWebRef?.current),
        width: mainNavWebRef?.current?.clientWidth,
      });
    }
  }, [mainNavWebRef?.current, appContainerRef?.current, windowHeight]);

  const MainWebContentHeight = () => {
    let computed = 0;
    if (mainNavHeaderHeight.computedStyle) {
      computed =
        parseFloat(mainNavHeaderHeight.computedStyle.marginTop) +
        parseFloat(mainNavHeaderHeight.computedStyle.marginBottom) +
        parseFloat(mainNavHeaderHeight.computedStyle.paddingTop) +
        parseFloat(mainNavHeaderHeight.computedStyle.paddingBottom);
    }

    return (
      windowHeight - (computed + mainNavHeaderHeight.height) - computed + "px"
    );
  };

  function getScreenPath() {
    const getPath = window.location.pathname.toLowerCase().split("/");
    return getPath[1]?.split("/")[0];
  }

  const getActiveMenu = (Path: string) => {
    return ScreenPath === Path;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setProductId(newValue);
    setValue(newValue);
  };
  return (
    <Fragment>
      <div className="main-web-container" ref={appContainerRef}>
        <div className="sidebar-container">
          <div className="web-logo-container">
            <img
              src={aLeLo_Logo}
              alt="aLeLo_Logo"
              width="132px"
              height="41px"
            />
          </div>
          {MainContainerTypes.MENU_ITEMS.map((menuItems) => {
            return (
              <div className="web-menu-container">
                <div className="menu_indicator_wrapper">
                  {getActiveMenu(menuItems.routePath) && (
                    <div className="menu_indicator"></div>
                  )}
                </div>
                <div
                  onClick={() => handleSideBar(menuItems.routePath)}
                  style={{
                    backgroundColor: getActiveMenu(menuItems.routePath)
                      ? "#01AE9A"
                      : "",
                    color: getActiveMenu(menuItems.routePath)
                      ? "#fff"
                      : "black",
                  }}
                  className="menu_wrapper"
                >
                  {getActiveMenu(menuItems.routePath) ? (
                    <img
                      className="menu_items_icons"
                      src={menuItems.logo_selected}
                      alt="Dash"
                    />
                  ) : (
                    <img
                      className="menu_items_icons"
                      src={menuItems.logo_unselected}
                      alt="Dash"
                    />
                  )}
                  <p className="menuitems">{menuItems.menu}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="content-container" ref={mainNavWebRef}>
            <div className="content-header">
              <div>
                <p className="content-header-text">{Header}</p>
              </div>
              <div className="content-tool-container">
                {ScreenPath.toLowerCase() == "products" ||
                ScreenPath == "categories" ? (
                  <div>
                    <InputField
                      placeholder="Search"
                      inputChange={function handleChange(e: any) {
                        dispatch(searchCategory(e.target.value));
                      }}
                      label="Search"
                      type="search_input"
                    />
                  </div>
                ) : null}

                {ScreenPath.toLowerCase() == "dashboard" && (
                  <img
                    className="bell_icon"
                    width="40px"
                    src={bell_icon}
                    alt="bell_icon"
                  />
                )}
                <img
                  className="bell_icon"
                  width="40px"
                  src={bell_icon}
                  alt="bell_icon"
                />
              </div>
            </div>
            {ScreenPath.toLowerCase() == "products" && (
              <Tabs
                className="Tab-Container"
                value={value}
                onChange={handleChange}
                variant={"scrollable"}
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{
                  maxWidth: {
                    xs: 320,
                    sm: 550,
                    md: 800,
                    lg: 880,
                    xl: "100%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "black",
                  },
                }}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
              >
                {productCategories
                  .slice(0, -1)
                  .map((TabItem: any, index: number) => {
                    const productName =
                      TabItem.name !== null ? TabItem.name : "";
                    return (
                      <Tab
                        sx={{
                          backgroundColor: value === TabItem.id ? "#fff" : "",
                          border: "none",
                          outline: "none",
                          borderRadius: 50,
                          textDecoration: "none",
                        }}
                        value={TabItem.id}
                        label={productName}
                      />
                    );
                  })}
              </Tabs>
            )}
          </div>
          <div
            style={{
              minHeight:
                ScreenPath === "products"
                  ? `${screenHeight - 170}px`
                  : `${screenHeight - 105}px`,
              maxHeight:
                ScreenPath === "products"
                  ? `${screenHeight - 170}px`
                  : `${screenHeight - 105}px`,
            }}
            className="content-wrapper"
          >
            {Children}
          </div>
          {/* )} */}
          {/* {ScreenPath === "dashboard" && (
            <div
              style={{
                width: "100%",
                backgroundColor: "#F2F8F7",
              }}
            >
              {" "}
              {Children}
            </div>
          )} */}
        </div>
      </div>
    </Fragment>
  );
};

export default MainContainer;
