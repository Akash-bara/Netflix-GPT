import MoiveList from "./MoiveList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (<div className="bg-black" >
      <div className="-mt-40 relative z-40">
        
      
      <MoiveList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MoiveList title={"Popular"} movies={movies.PopularMovies}/>
      <MoiveList title={"Top Rated Movies"} movies={movies.TopRatedMovies}/>
      <MoiveList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
     </div>
    </div>)
  )
}

export default SecondContainer;
