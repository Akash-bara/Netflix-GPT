const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-black px-12 pt-[20%] text-white z-20">
      
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        {title}
      </h1>

      <p className="w-1/3 text-lg leading-relaxed mb-6 text-gray-200">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-opacity-60 transition">
          ▶ Play
        </button>

        <button className="bg-gray-500 bg-opacity-60 text-white px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-opacity-40 transition">
           More Info
        </button>
      </div>

    </div>
  );
};

export default VideoTitle;
