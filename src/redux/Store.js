import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./Profile/ProfileSlice";
import PlaylistReducer from "./Playlist/PlaylistSlice";

const Store = configureStore({
  reducer: {
    profile: ProfileReducer,
    playlist: PlaylistReducer,
  },
});

export default Store;
