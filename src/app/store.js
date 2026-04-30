import { configureStore } from "@reduxjs/toolkit";
import listingReducer from './features/listingsSlice';
import chatReducer from './features/chatSlice'
export const store = configureStore({
  reducer: {
    listing: listingReducer,
    chat: chatReducer
  }
});
