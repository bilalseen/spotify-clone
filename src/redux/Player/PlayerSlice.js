import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentTime: 0,
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
  },
});

export const { play, pause, setCurrentTime } = playerSlice.actions;

export default playerSlice.reducer;
