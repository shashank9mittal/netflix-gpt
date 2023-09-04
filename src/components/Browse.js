import Header from "./Header";
import useNewMovies from "../services/useNewMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondatryContainer";
import usePopularMovies from "../services/usePopularMovies";
import useTopMovies from "../services/useTopMovies";
import useUpcomingMovies from "../services/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSuggestions from "./GPTSuggestions";

const Browse = () => {
  const showGPTSuggestions = useSelector((store) => store.gpt.showGptSearch);
  useNewMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();

  return (
    <div className=' bg-zinc-900 '>
      <Header></Header>
      {showGPTSuggestions ? (
        <GPTSuggestions />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
