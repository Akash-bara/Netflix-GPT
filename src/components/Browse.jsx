import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainser";
import SecondContainer from "./secondContainer";
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse = () => {
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return(
        <div> 
           <Header/>
           {
            showGptSearch ? <GptSearch/> : <>
            <MainContainer/>
           <SecondContainer/>
            </>
           }
           
           
        </div>
    );
}
export default Browse;