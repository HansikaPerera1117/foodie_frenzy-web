import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer"; // Assuming you have combined reducers

const store = configureStore({
  reducer: rootReducer, // Your combined reducers go here
});

export default store;
