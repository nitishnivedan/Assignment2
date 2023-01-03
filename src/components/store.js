import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    loginInfo: loginReducer,
  },
});

export default store;
