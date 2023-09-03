import Header from "./Header";
import useNewMovies from "../services/useNewMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondatryContainer";
import usePopularMovies from "../services/usePopularMovies";
import useTopMovies from "../services/useTopMovies";
import useUpcomingMovies from "../services/useUpcomingMovies";

const Browse = () => {
  useNewMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();

  return (
    <div className=' bg-zinc-900 '>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
