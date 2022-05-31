import { FETCH_ALL_MOVIES_ERROR, FETCH_ALL_MOVIES_SUCCESS, FETCH_ALL_MOVIES_REQUEST } from "./MovieConst";
import MovieReducer from "./MovieReducer";
import { createContext, useContext, useReducer } from "react";

const initialState = {
    movies: [],
    loading: false,
    error: false,
}

const MovieContext = createContext({});

export const useMovieContext = () => useContext(MovieContext);

export default function MovieContextProvider ({children}) {
    const [state, dispatch] = useReducer(MovieReducer, initialState);
    const fetchAllMovies = async() => {
        dispatch({type: FETCH_ALL_MOVIES_REQUEST})
        try{
            const res = await fetch("https://edgemony-backend.herokuapp.com/series");
            const data = await res.json();
            dispatch({type: FETCH_ALL_MOVIES_SUCCESS, payload: data})
        }catch(e){
            dispatch({type: FETCH_ALL_MOVIES_ERROR, payload: e})
        }
    }
    return (
        <MovieContext.Provider value={{movies: state.movies, fetchAllMovies}}>
            {children}
        </MovieContext.Provider>
    )
}