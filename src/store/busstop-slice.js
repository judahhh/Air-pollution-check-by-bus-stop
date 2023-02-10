import { createSlice } from "@reduxjs/toolkit";

const BusstopSlice = createSlice({
  name: "Busstop",
  initialState: {
    busstopList: [],
    keyword: "",
  },
  reducers: {
    addBusstopList(state, action) {
      state.busstopList = action.payload;
    },
    searchKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

export const BusstopActions = BusstopSlice.actions;
export default BusstopSlice.reducer;
