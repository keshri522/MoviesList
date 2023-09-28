import React from "react";
import { createSlice } from "@reduxjs/toolkit";

// this function will get all the Search item from local Storage
// const GetSearchFromLocalStorage = () => {
//   let item = localStorage.getItem("Search");
//   if (item) {
//     return JSON.parse(item);
//   } else {
//     return [];
//   }
// };
const Search = createSlice({
  initialState: [],
  name: "search",
  reducers: {
    getData: (state, action) => {
      return action.payload;
    },
  },
});
// exports
export const { getData } = Search.actions;
export default Search.reducer;
