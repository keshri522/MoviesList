import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import SeachName from "../Redux/reducers";
const store = configureStore({
  reducer: {
    search: SeachName,
  },
});
export default store;
