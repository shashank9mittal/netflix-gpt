import { useSelector } from "react-redux";
import useMovieVideo from "../services/useMovieVideo";
import { YOU_TUBE_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieVideo(movieId);

  return (
    <div className=''>
      <iframe
        className='w-full aspect-video'
        src={YOU_TUBE_URL + trailer?.key + "?&autoplay=1&mute=1"}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    </div>
  );
};
export default VideoBackground;
