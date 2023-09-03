import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.newMovies);
  return (
    <div className=''>
      <MovieList title={"Now Playing"} movieList={movies}></MovieList>
      <MovieList title={"Now Playing"} movieList={movies}></MovieList>

      <MovieList title={"Now Playing"} movieList={movies}></MovieList>
    </div>
  );
};
export default SecondaryContainer;
