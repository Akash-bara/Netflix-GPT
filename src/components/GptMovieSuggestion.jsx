import {  useSelector } from "react-redux";
import MovieList from "./MoiveList";

const GptMovieSuggestion = () => {
  const showGptSearch = useSelector( store => store.gpt.showGptSearch);
  const movieNames= useSelector( store => store.gpt.gptMovieNames);
  const movieResults= useSelector( store => store.gpt.gptMoviesResults);
 if(!showGptSearch) return null;
 if (!movieNames || movieNames.length === 0) return null;

  return (
   <div className="bg-black/80 text-white px-6 py-8 space-y-10 rounded-xl m-4 ">
    <div>
{movieNames.map( movieName => (
  <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[movieName]} 
        />))
}    </div>
   </div> );
};

export default GptMovieSuggestion;
