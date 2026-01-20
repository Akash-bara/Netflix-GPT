import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../utilities/moviesSlice";
import { API_OPTION } from "../utilities/constant";
import { useEffect } from "react";


const useTopRatedMovies =() =>{
    
    const dispatch = useDispatch();
    const TopRatedMovies = useSelector( store => store.movies.TopRatedMovies);
    
    useEffect(()=>{
        !TopRatedMovies && getTopRatedMovies();
    },[])
     
    const  getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
    ;
     const json = await data.json();
     dispatch(addTopRatedMovies(json.results))
    }
}
export default useTopRatedMovies;