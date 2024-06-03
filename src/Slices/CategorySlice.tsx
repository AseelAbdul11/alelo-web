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
  categories: []
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
    },
    setCategoriesList  : (state ,action : any ) =>{
      state.categories = action.payload
    }
  }
});

// Part 4
export const { switchToggle, searchCategory, clearSearch, addCategory, insertCategory, setCategory ,setCategoriesList} =
  categorySlice.actions;
export default categorySlice.reducer;
