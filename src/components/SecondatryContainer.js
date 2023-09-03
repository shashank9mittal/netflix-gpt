import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.newMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topMovies = useSelector((store) => store.movies.topMovies);

  const upComingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div className='bg-black pb-12'>
      <div className='mt-0 md:-mt-72 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movieList={movies}></MovieList>
        <MovieList
          title={"Popular Movies"}
          movieList={popularMovies}
        ></MovieList>

        <MovieList title={"Top Movies"} movieList={topMovies}></MovieList>
        <MovieList
          title={"Upcoming Movies"}
          movieList={upComingMovies}
        ></MovieList>
      </div>
    </div>
  );
};
export default SecondaryContainer;
