import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTMovieList = () => {
  const movieList = useSelector((store) => store.movies.popularMovies);
  const gptMovieList = useSelector((store) => store.gpt.movieResults);
  const gptList = gptMovieList?.flat();

  return (
    <div className='text-white pt-12 '>
      <div className='text-lg font-semibold py-4 text-white'>
        Suggested Movies
      </div>
      {gptList?.length ? (
        <div className='flex flex-wrap gap-4 '>
          {gptMovieList.flat()?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='flex flex-wrap gap-4 '>
          {movieList?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};
export default GPTMovieList;
