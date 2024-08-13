import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isAdded: false,
  currentTime: 0,
  songName: "Song Name",
  artistName: "Artist Name",
  songImage: "https://via.placeholder.com/150",
  songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
    add(state) {
      state.isAdded = true;
    },
    remove(state) {
      state.isAdded = false;
    },
  },
});

export const { play, pause, add, remove, setCurrentTime } = playerSlice.actions;

export default playerSlice.reducer;
