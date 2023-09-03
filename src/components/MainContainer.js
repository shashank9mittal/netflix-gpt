import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.newMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;
  return (
    <div className='bg-slate-100 relative'>
      <VideoBackground movieId={id} />

      <VideoTitle title={original_title} overview={overview}></VideoTitle>
    </div>
  );
};
export default MainContainer;
