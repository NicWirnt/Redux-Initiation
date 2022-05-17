import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./components/buttons/counterSlice";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
