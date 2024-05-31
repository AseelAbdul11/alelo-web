// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import vegetables from "../Assets/vegetables.webp";
// Part 2
export interface IssueInitialState {
  categories: any[];
  search: any;
}

export const initialState: IssueInitialState = {
  search: null,
  categories: [
    {
      name: "Vegetables",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Fruits",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Nuts",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Grocery",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Icecream",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
  ],
};

// Part 3
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    searchCategory: (state, action: any) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
    switchToggle: (state, action: any) => {
      state.categories.map((category: any) => {
        if (category.category == action.payload.name) {
          category.show = action.payload.show;
        }        
      });
    },
    addCategory: (state, action: any) => {
        state.categories.push(action.payload)
    }
  },
});

// Part 4
export const { switchToggle, searchCategory, clearSearch,addCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
