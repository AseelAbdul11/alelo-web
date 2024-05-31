// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import vegetables from "../Assets/vegetables.webp";
// Part 2
export interface IssueInitialState {
  categories: any[];
  search: any;
  category: any;

}

export const initialState: IssueInitialState = {
  search: null,
  category: null,
  categories: [
    {
      id: 1,
      name: "Vegetables",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 2,
      name: "Fruits",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 3,
      name: "Nuts",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 4,
      name: "Grocery",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 5,
      name: "Icecream",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 6,
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 7,
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 8,
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 9,
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 10,
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 11,
      name: "Cloths",
      photo: vegetables,
      show: true,
      list: [],
    },
    {
      id: 12,
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
    setCategory: (state, action: any) => {
      state.category = action.payload
    },
    addCategory: (state, action: any) => {
      state.categories.push(action.payload)
    },
    insertCategory: (state, action: any) => {
      const data = action.payload
      console.log(data)
      //call api
    }
  }
});

// Part 4
export const { switchToggle, searchCategory, clearSearch, addCategory, insertCategory, setCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
