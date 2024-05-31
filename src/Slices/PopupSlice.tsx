// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Part 2
export interface IssueInitialState {
  name: any;
  image: any;
  finalImage: any;
  validation: any;
  edit : any
}
const initialState: IssueInitialState = {
  name: null,
  image: null,
  validation: false,
  finalImage: null,
  edit : false
};

// Part 3
export const PopupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setName: (state, action: any) => {
      state.name = action.payload;
    },
    setImage: (state, action: any) => { 
    
      state.image = action.payload;
    },
    clearName: (state) => {
      state.name = "";
    },
    clearImage: (state) => {
      state.image = "";
      state.finalImage = "";
    },
    clearValidation: (state) => {
      state.validation = "";
    },
    setValidation: (state, action: any) => {
      state.validation = action.payload;
    },
    setFinalImage: (state, action: any) => {
      state.finalImage = action.payload;
    },
    editToggle : (state, action : any)=>{
      state.edit = action.payload
    }
  },
});

// Part 4
export const {
  setName,
  setImage,
  clearImage,
  clearValidation,
  clearName,
  setValidation,  
  setFinalImage,
  editToggle
} = PopupSlice.actions;
export default PopupSlice.reducer;
