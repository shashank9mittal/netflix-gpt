import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "New Movies",
  initialState: {
    newMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNewMovies: (state, action) => {
      state.newMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopMovies: (state, action) => {
      state.topMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});
export const {
  addNewMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopMovies,
  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
