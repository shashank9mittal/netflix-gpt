import { useEffect } from "react";
import { API_OPTIONS, GET_NEW_MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNewMovies } from "../store/movieSlice";

const useNewMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNewMovies();
  }, []);
  async function getNewMovies() {
    const data = await fetch(GET_NEW_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNewMovies(json.results));
  }
};
export default useNewMovies;
