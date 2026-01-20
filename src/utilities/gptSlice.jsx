import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMoviesResults :{},
        gptMovieNames:[],
        

    },
    reducers:{
     toggleGptSearchView:(state)=>{
state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResults:(state,action)=>{
const {movieName , movieResults} =action.payload;
state.gptMoviesResults[movieName] = movieResults;
        },
         addGptMovieName: (state, action) => {
      if (!state.gptMovieNames.includes(action.payload)) {
        state.gptMovieNames.push(action.payload);
      }
    },
    clearGptResults: (state) => {
  state.gptMovieNames = [];
  state.gptMovieResults = {};
},
  
    },
});
 export const {toggleGptSearchView , addGptMovieResults,addGptMovieName,clearGptResults} =gptSlice.actions;
 export default gptSlice.reducer;