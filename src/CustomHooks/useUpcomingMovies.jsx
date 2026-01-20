import { useDispatch, useSelector } from "react-redux";
import {   addUpcomingMovies } from "../utilities/moviesSlice";
import { API_OPTION } from "../utilities/constant";
import { useEffect } from "react";


const useUpcomingMovies =() =>{
    
    const dispatch = useDispatch();
    const UpcomingMovies = useSelector( store => store.movies.UpcomingMovies);
    
    useEffect(()=>{
        !UpcomingMovies && getUpcomingMovies();
    },[])
     
    const  getUpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
;    ;
     const json = await data.json();
     dispatch(addUpcomingMovies(json.results))
    }
}
export default useUpcomingMovies;