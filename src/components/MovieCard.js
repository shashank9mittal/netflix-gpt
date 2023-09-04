import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie || !movie?.backdrop_path) return null;
  return (
    <div className='w-72 pr-4 rounded-md relative group cursor-pointer'>
      <img
        className='w-full rounded-md object-cover"'
        alt='Movie Card'
        src={IMG_CDN_URL + movie?.backdrop_path}
      />
      <div className='absolute hidden group-hover:block bottom-0 bg-gradient-to-l from-transparent to-black w-11/12 h-full opacity-90'>
        <div className='flex items-center flex-wrap h-full align-middle ml-6 gap-3'>
          <div className='text-white font-bold text-2xl'>{movie.title}</div>
          {/* <div className='text-white font-semibold text-2xl'>
            Rating: {movie.vote_average}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
