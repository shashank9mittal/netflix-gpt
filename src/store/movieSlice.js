import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "New Movies",
  initialState: {
    newMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNewMovies: (state, action) => {
      state.newMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNewMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
