import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  async function getUpcomingMovies() {
    const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
export default useUpcomingMovies;
