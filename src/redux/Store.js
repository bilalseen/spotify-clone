import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./Profile/ProfileSlice";
import PlaylistReducer from "./Playlist/PlaylistSlice";
import PlayerReducer from "./Player/PlayerSlice";

const Store = configureStore({
  reducer: {
    profile: ProfileReducer,
    playlist: PlaylistReducer,
    player: PlayerReducer,
  },
});

export default Store;
