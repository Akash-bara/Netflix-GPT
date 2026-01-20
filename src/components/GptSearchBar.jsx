import { useDispatch, useSelector } from "react-redux";
import lang from "../utilities/languageConstants";
import { useRef } from "react";
import { API_OPTION, Movie_Tags } from "../utilities/constant";
import { addGptMovieName, addGptMovieResults, clearGptResults, toggleGptSearchView } from "../utilities/gptSlice";
import { useMovieTags } from "../CustomHooks/useMovieTags";

 
const GptSearchBar = () => {
  const dispatch =useDispatch();
    const langKey=useSelector((store)=>store.config.lang);
    const searchText=useRef(null);

    const searchMoviesTMDB = async(movie)=>{
 const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTION);
  const json = await data.json();
  const movieLimit=json.results
  .slice(0, 9)
  .map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
  }));
  dispatch(addGptMovieName(movie));
  dispatch(addGptMovieResults({movieName: movie ,movieResults: movieLimit}));
  return movieLimit;
}  

const handleSubmit = async (e) => {
  e.preventDefault();
dispatch(clearGptResults());
  const query = searchText.current.value.toLowerCase();
  if (!query) return;

  const matchedTags = useMovieTags(query,Movie_Tags)


  if (matchedTags.length > 0) {
    const movieSet = new Set();

    matchedTags.forEach((tag) => {
      Movie_Tags[tag].forEach((movie) => movieSet.add(movie));
    });


    for (let movie of movieSet) {
            dispatch(addGptMovieName(movie));

      await searchMoviesTMDB(movie);
    }
  }
  else {
        dispatch(addGptMovieName(query));

    await searchMoviesTMDB(query);
  }

  
};



 
  return (
    <div className="flex justify-center mt-30">
      <div className="flex w-full max-w-2xl bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg">

        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="
            flex-1 px-4 py-3
            bg-transparent text-white
            outline-none placeholder-gray-400
          "
        />

        <button
        type="button"
        onClick={handleSubmit}
          className="
            px-5
            bg-red-600 text-white font-semibold
            hover:bg-red-700 transition-colors
          "
        >
          {lang[langKey].Search}
        </button>

      </div>
    </div>
  );
};

export default GptSearchBar;
