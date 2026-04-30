import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    listing: null,
    isOpen: false,
    chatId: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.listing = action.payload.listing;
      state.isOpen = true;
      state.chatId = action.payload.chatId ?? null; // <-- фикс "залипания"
    },
    clearChat: (state) => {
      state.listing = null;
      state.isOpen = false;
      state.chatId = null;
    }
  }
})

export const { setChat, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
