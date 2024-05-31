import Dash_unselected from "../Assets/Dashboard_unselected.svg";
import Dash_selected from "../Assets/Dashboard_selected.svg";
import user_selected from "../Assets/user-mgmnt_selected.svg";
import user_unselected from "../Assets/User_Mngmt_unselected.svg";
import category_selected from "../Assets/Categories_selected.svg";
import category_unselected from "../Assets/Categories_unselected.svg";
import products_selected from "../Assets/products_selected.svg";
import products_unselected from "../Assets/Products_unselected.svg";
import videos_selected from "../Assets/Videos_selected.svg";
import videos_unselected from "../Assets/video_unselected.svg";

export const MENU_ITEMS = [
  {
    id: 1,
    menu: "Dashboard",
    logo_unselected: Dash_unselected,
    logo_selected: Dash_selected,
    routePath: "dashboard",
  },
  {
    id: 2,
    menu: "User Management",
    logo_unselected: user_unselected,
    logo_selected: user_selected,
    routePath: "usermanagement",
  },
  {
    id: 3,
    menu: "Categories",
    logo_unselected: category_unselected,
    logo_selected: category_selected,
    routePath: "categories",
  },
  {
    id: 4,
    menu: "Products",
    logo_unselected: products_unselected,
    logo_selected: products_selected,
    routePath: "products",
  },
  {
    id: 5,
    menu: "Videos",
    logo_unselected: videos_unselected,
    logo_selected: videos_selected,
    routePath: "videos",
  },
];

export const DASHBOARD = "dashboard";
export const USERMANAGEMENT = "usermanagement";
export const CATEGORIES = "categories";
export const PRODUCTS = "products";
export const VIDEOS = "videos";
