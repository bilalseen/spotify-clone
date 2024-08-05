import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const data = Array(8)
  .fill(null)
  .map((_, index) => ({
    id: index,
    name: faker.lorem.words(2),
    description: faker.lorem.sentence({ min: 3, max: 7 }),
    coverImage: faker.image.urlPicsumPhotos(200, 200, index),
    songs: Array(10)
      .fill(null)
      .map((_, index) => ({
        id: index,
        title: `Song ${index + 1}`,
        artist: "Artist",
      })),
  }));

const initialState = {
  playlists: [...data],
};

const PlaylistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylists(state, action) {
      state.playlists = action.payload;
    },
    addPlaylist(state, action) {
      state.playlists.push(action.payload);
    },
    removePlaylist(state, action) {
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id !== action.payload
      );
    },
  },
});

export const { setPlaylists, addPlaylist, removePlaylist } =
  PlaylistSlice.actions;
export default PlaylistSlice.reducer;
