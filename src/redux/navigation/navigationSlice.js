import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpened: false,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpened = !state.isSideBarOpened;
    },
  },
});

export const {toggleSideBar}=navigationSlice.actions;
export default navigationSlice.reducer;
