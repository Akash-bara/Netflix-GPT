import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainser";
import SecondContainer from "./secondContainer";
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies";


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
        <div> 
           <Header/>
           <MainContainer/>
           <SecondContainer/>
        </div>
    );
}
export default Browse;