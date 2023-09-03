import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  async function getPopularMovies() {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
