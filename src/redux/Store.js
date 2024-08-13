import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./slices/ProfileSlice";
import PlaylistReducer from "./slices/PlaylistSlice";
import PlayerReducer from "./slices/PlayerSlice";

const Store = configureStore({
  reducer: {
    profile: ProfileReducer,
    playlist: PlaylistReducer,
    player: PlayerReducer,
  },
});

export default Store;
