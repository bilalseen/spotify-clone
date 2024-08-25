import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const initialState = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  profileImage: faker.image.urlLoremFlickr({ category: "people" }),
  followers: faker.number.int({ min: 0, max: 100 }),
  following: faker.number.int({ min: 20, max: 100 }),
  loggedIn: false,
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.profileImage = action.payload.profileImage;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
    },
    setUserState: (state) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { setProfile, setUserState } = ProfileSlice.actions;
export default ProfileSlice.reducer;
