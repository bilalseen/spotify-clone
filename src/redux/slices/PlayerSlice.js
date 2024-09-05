import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentTime: 0,
  songName: "Ride",
  artistName: "Twenty One Pilots",
  songImage: "https://i.scdn.co/image/ab67616d00001e022df0d98a423025032d0db1f7",
  songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  isPlayingOnAnotherDevice: false,
  isLiked: true,
  shuffleOn: false,
  repeat: "off",
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
    setIsPlayingOnAnotherDevice(state, action) {
      state.isPlayingOnAnotherDevice = action.payload;
    },
    setLiked(state) {
      state.isLiked = !state.isLiked;
    },
    setShuffle(state) {
      state.shuffleOn = !state.shuffleOn;
    },
    setRepeat(state, action) {
      state.repeat = action.payload.state;
    },
  },
});

export const {
  play,
  pause,
  add,
  remove,
  setCurrentTime,
  setIsPlayingOnAnotherDevice,
  setLiked,
  setShuffle,
  setRepeat,
} = playerSlice.actions;

export default playerSlice.reducer;
