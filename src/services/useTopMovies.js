import { useEffect } from "react";
import { API_OPTIONS, TOP_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopMovies } from "../store/movieSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();
  async function getTopMovies() {
    const data = await fetch(TOP_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopMovies(json.results));
  }
  useEffect(() => {
    getTopMovies();
  }, []);
};
export default useTopMovies;
