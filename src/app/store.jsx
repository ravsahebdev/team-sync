import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/authSlice";
import themeReducer from "../shared/state/themeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mode: themeReducer,
  },
});

export default store;
