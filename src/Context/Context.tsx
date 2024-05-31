import { createContext, useContext } from "react";
export type GlobalContent = {
  navbarHeader: null;
  setNavbarHeader: null;
};
export const AppContext = createContext<GlobalContent>({
  navbarHeader: null, // set a default value
  setNavbarHeader: null,
});
export const useGlobalContext = () => useContext(AppContext);
