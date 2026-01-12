import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6 ">
      
      <h1 className="text-2xl font-semibold text-white py-4">
        {title}
      </h1>

      <div className="flex gap-3 overflow-x-scroll scrollbar-hide ">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>

    </div>
  );
};

export default MovieList;
