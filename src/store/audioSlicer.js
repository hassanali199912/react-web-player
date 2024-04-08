import { createSlice } from "@reduxjs/toolkit";

const audioSlicer = createSlice({
  name: "audio",
  initialState: {
    api: "https://server8.mp3quran.net/afs/",
    sura: "001",
  },
  reducers: {
    getFullData: (state) => {
      console.log(`${state.api}${state.sura}.mp3`);
    },
    setIntial: (state) => {
      state.api = "https://server8.mp3quran.net/afs/";
      state.sura = "001";
    },

    setSura: (state, action) => {
      state.sura = action.payload;
    },
    setApi: (state, action) => {
      state.api = action.payload;
    },
  },
});

export const { getFullData, setIntial, setApi, setSura } = audioSlicer.actions;

export default audioSlicer.reducer;
