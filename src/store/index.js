import { configureStore } from "@reduxjs/toolkit";

import audioReducers from "./audioSlicer";

const store = configureStore({
  reducer: {
    auido: audioReducers,
  },
});

export default store;
