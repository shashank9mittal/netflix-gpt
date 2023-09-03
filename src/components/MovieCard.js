import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterId }) => {
  if (!posterId) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img alt='Movie Card' src={IMG_CDN_URL + posterId} />
    </div>
  );
};
export default MovieCard;
