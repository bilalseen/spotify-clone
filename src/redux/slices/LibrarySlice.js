import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listingType: "List",
};

const LibrarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    toggleListingType: (state) => {
      state.listingType = state.listingType === "List" ? "Grid" : "List";
    },
  },
});

export const { toggleListingType } = LibrarySlice.actions;
export default LibrarySlice.reducer;
