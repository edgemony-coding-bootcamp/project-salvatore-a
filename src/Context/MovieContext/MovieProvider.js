import {
  FETCH_ALL_MOVIES_ERROR,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_ALL_MOVIES_REQUEST,
  FAVOURITE_MOVIES_REQUEST,
  FAVOURITE_MOVIES_SUCCESS,
  FAVOURITE_MOVIES_ERROR,
  RATING_MOVIES_REQUEST,
  RATING_MOVIES_SUCCESS,
  RATING_MOVIES_ERROR,
  HIDE_MOVIES_REQUEST,
  HIDE_MOVIES_SUCCESS,
  HIDE_MOVIES_ERROR,
  DELETE_MOVIES_REQUEST,
  DELETE_MOVIES_SUCCESS,
  DELETE_MOVIES_ERROR,
} from "./MovieConst";

import MovieReducer from "./MovieReducer";
import { createContext, useContext, useReducer } from "react";

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

const MovieContext = createContext({});

export const useMovieContext = () => useContext(MovieContext);

export default function MovieContextProvider({ children }) {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const fetchAllMovies = async (token, admin) => {
    dispatch({ type: FETCH_ALL_MOVIES_REQUEST });
    try {
      const res = !admin
        ? await fetch("https://edgemony-backend.herokuapp.com/660/series", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        : await fetch("https://edgemony-backend.herokuapp.com/series");

      const data = await res.json();

      if (res.status !== 401) {
        dispatch({ type: FETCH_ALL_MOVIES_SUCCESS, payload: data });
      } else {
        throw new Error("Non sei autorizzato ad accedere a questa pagina");
      }
    } catch (e) {
      dispatch({ type: FETCH_ALL_MOVIES_ERROR, payload: e });
    }
  };
  const movieRating = async (id, newRating) => {
    dispatch({ type: RATING_MOVIES_REQUEST });
    try {
      const res = await fetch(
        `https://edgemony-backend.herokuapp.com/series/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: newRating,
          }),
        }
      );
      const { status } = await res.json();
      if (status === 200) {
        dispatch({ type: RATING_MOVIES_SUCCESS, payload: newRating });
      } else {
        throw new Error("Impossibile aggiornare lo stato.");
      }
    } catch (error) {
      dispatch({ type: RATING_MOVIES_ERROR, payload: error });
    }
  };
  const favouriteMovie = async (id, isFavourite) => {
    dispatch({ type: FAVOURITE_MOVIES_REQUEST });
    try {
      const res = await fetch(
        `https://edgemony-backend.herokuapp.com/series/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            favorite: isFavourite,
          }),
        }
      );
      const { status } = await res.json();
      if (status === 200) {
        dispatch({ type: FAVOURITE_MOVIES_SUCCESS, payload: id });
      } else {
        throw new Error("Impossibile aggiornare lo stato.");
      }
    } catch (error) {
      dispatch({ type: FAVOURITE_MOVIES_ERROR, payload: error });
    }
  };

  const hideMovie = async (movieID, newUsersArray) => {
    dispatch({ type: HIDE_MOVIES_REQUEST });
    try {
      const req = await fetch(
        `https://edgemony-backend.herokuapp.com/series/${movieID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            users: newUsersArray,
          }),
        }
      );
      if (req.status === 200) {
        dispatch({
          type: HIDE_MOVIES_SUCCESS,
          payload: { movieID: movieID, users: newUsersArray },
        });
      } else {
        throw new Error("Impossibile eseguire la richiesta.");
      }
    } catch (e) {
      dispatch({ type: HIDE_MOVIES_ERROR, payload: e });
    }
  };
  const deleteMovie = async (id) => {
    dispatch({ type: DELETE_MOVIES_REQUEST });
    try {
      const req = await fetch(
        `https://edgemony-backend.herokuapp.com/series/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (req.status === 200) {
        dispatch({ type: DELETE_MOVIES_SUCCESS, payload: id });
      } else {
        throw new Error("Impossibile eseguire l'eliminazione.");
      }
    } catch (error) {
      dispatch({ type: DELETE_MOVIES_ERROR, payload: error });
    }
  };
  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        fetchAllMovies,
        movieRating,
        favouriteMovie,
        hideMovie,
        deleteMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
