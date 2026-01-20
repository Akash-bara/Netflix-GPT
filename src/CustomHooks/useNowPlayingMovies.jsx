import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { API_OPTION } from "../utilities/constant";
import { useEffect } from "react";


const useNowPlayingMovies =() =>{
    
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store)=>{store.movies.nowPlayingMovies});
    
    useEffect(()=>{
        
        
        !nowPlayingMovies && getNowPlayingMovies();
    },[])
     
    const  getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
     const json = await data.json();
     dispatch(addNowPlayingMovies(json.results))
    }
}
export default useNowPlayingMovies;