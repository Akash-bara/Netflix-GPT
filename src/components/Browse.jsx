import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainser";
import SecondContainer from "./secondContainer";


const Browse = () => {
    useNowPlayingMovies();

    return(
        <div> 
           <Header/>
           <MainContainer/>
           <SecondContainer/>
        </div>
    );
}
export default Browse;