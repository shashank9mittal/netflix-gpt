import GPTMovieList from "./GPTMovieList";

const GPTSuggestions = () => {
  return (
    <div className='h-screen bg-black flex items-center justify-center'>
      <div className='container'>
        <div className='flex items-center  w-1/2 bg-white rounded-sm shadow-md p-2 m-auto'>
          <input
            type='text'
            placeholder='Explore the Cinematic World!...'
            className='outline-none w-full'
          />
          <button className='ml-2 px-4 py-2 bg-red-700 text-white rounded-sm hover:bg-red-900'>
            Search
          </button>
        </div>
        <GPTMovieList></GPTMovieList>
      </div>
    </div>
  );
};
export default GPTSuggestions;
