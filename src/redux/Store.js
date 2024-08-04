import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "./Profile/ProfileSlice";

const Store = configureStore({
  reducer: {
    profile: ProfileSlice.reducer,
  },
});

export default Store;
