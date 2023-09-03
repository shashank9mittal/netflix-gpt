import { useState } from "react";
import { API_OPTIONS, VIDEO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice";

const useMovieVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async (movieId) => {
    const data = await fetch(
      VIDEO_URL + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useState(() => {
    getMovieVideo(movieId);
  }, []);
};
export default useMovieVideo;
