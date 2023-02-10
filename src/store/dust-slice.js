import { createSlice } from "@reduxjs/toolkit";

const dustSlice = createSlice({
  name: "dust",
  initialState: {
    dustData: {},
  },
  reducers: {
    addDustData(state, action) {
      state.dustData = action.payload;
    },
  },
});

export const dustActions = dustSlice.actions;
export default dustSlice.reducer;
