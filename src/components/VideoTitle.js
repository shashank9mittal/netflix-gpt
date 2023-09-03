const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-full h-1/2 mx-24 absolute bottom-0'>
      <div className='text-white text-2xl font-bold my-6'>{title}</div>
      <div className='text-white text-lg my-6 w-6/12'>{overview}</div>
      <div className='flex gap-2'>
        <div className='py-2 px-4 bg-white text-center w-1/12 rounded-sm text-black cursor-pointer'>
          ▶️ Play
        </div>
        <div className='py-2 px-4 bg-slate-400 text-center w-1/12 rounded-sm text-white bg-opacity-80 cursor-pointer'>
          More Info
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
