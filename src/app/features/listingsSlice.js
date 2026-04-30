import { createSlice } from "@reduxjs/toolkit";
import { dummyListings } from "../../assets/assets";

const listingsSlice = createSlice({
  name: "listing",
  initialState: {
    listings: dummyListings,
    userListings: [],
    balance: {
      earned: 0,
      withdrawn: 0,
      available: 0,
    },
  },
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
  },
});

export const { setListings } = listingsSlice.actions;
export default listingsSlice.reducer;
