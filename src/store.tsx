import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Slices/CategorySlice";
import UserManageSlice from "./Slices/UserManageSlice";
import PopupSlice from "./Slices/PopupSlice";
export const store = configureStore({
  reducer: {
    category: CategorySlice,
    usermanage: UserManageSlice,
    popup: PopupSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
