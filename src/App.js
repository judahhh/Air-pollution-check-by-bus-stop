// import useStore from "./store";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import DustDetail from "./pages/DustDetail";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<DustDetail />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
