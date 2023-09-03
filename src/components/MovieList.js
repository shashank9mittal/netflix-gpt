import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className='px-6 w-screen'>
      <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll w-screen'>
        <div className='flex'>
          {movieList?.map((movie) => (
            <MovieCard key={movie.id} posterId={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
