import Header from "./Header";
import useNewMovies from "../services/useNewMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondatryContainer";

const Browse = () => {
  useNewMovies();

  return (
    <div className=' bg-zinc-900 '>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
