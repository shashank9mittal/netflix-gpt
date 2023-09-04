import { useRef } from "react";
import GPTMovieList from "./GPTMovieList";
import SearchMovies from "../services/searchMovies";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../store/gptSlice";

const GPTSuggestions = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    const movieList = await SearchMovies(searchText.current.value);
    dispatch(addGptMovieResult(movieList));
  };

  return (
    <div className=' h-full bg-black flex justify-center'>
      <div className='container h-full bg-black relative'>
        <div className='bg-gradient-to-t from-black to-transparent h-48  text-center sticky top-0 z-30 '>
          <div className='flex items-center  w-1/2 bg-white rounded-sm shadow-md p-2 absolute bottom-4 right-1/4'>
            <input
              ref={searchText}
              type='text'
              placeholder='Explore the Cinematic World!...'
              className='outline-none w-full'
            />
            <button
              className='ml-2 px-4 py-2 bg-red-700 text-white rounded-sm hover:bg-red-900'
              onClick={handleGptSearchClick}
            >
              Search
            </button>
          </div>
        </div>
        <div className='mb-12'>
          <GPTMovieList></GPTMovieList>
        </div>
      </div>
    </div>
  );
};
export default GPTSuggestions;
