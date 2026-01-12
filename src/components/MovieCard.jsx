import { IMG_CDN_URL } from "../utilities/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="relative w-40 flex-shrink-0 group">
      <img
        className="
          w-full h-60 object-cover rounded-lg
          transition-transform duration-300 ease-out
          hover:scale-110
        "
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
      />

      
    </div>
  );
};

export default MovieCard;
