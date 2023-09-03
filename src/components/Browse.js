import Header from "./Header";
import useNewMovies from "../services/useNewMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNewMovies();

  return (
    <div className='h-screen bg-slate-400'>
      <Header></Header>
      <MainContainer />
    </div>
  );
};
export default Browse;
