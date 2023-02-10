import { configureStore, combineReducers } from "@reduxjs/toolkit";
import BusstopReducer from "./busstop-slice";
import dustReducer from "./dust-slice";
// const reducer = combineReducers({
//   busstop: BusstopReducer,
// });

const store = configureStore({
  reducer: {
    busstop: BusstopReducer,
    dust: dustReducer,
  },
});
export default store;
