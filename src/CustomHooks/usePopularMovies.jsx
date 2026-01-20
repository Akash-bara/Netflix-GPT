import { useDispatch, useSelector } from "react-redux";
import {  addPopularMovies } from "../utilities/moviesSlice";
import { API_OPTION } from "../utilities/constant";
import { useEffect } from "react";


const usePopularMovies =() =>{
    
    const dispatch = useDispatch();
    
    const PopularMovies = useSelector( store => store.movies.PopularMovies);

    useEffect(()=>{
        !PopularMovies && getPopularMovies();
    },[])
     
    const  getPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION);    ;
     const json = await data.json();
     dispatch(addPopularMovies(json.results))
    }
}
export default usePopularMovies;