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
} from "./MovieConst";

export default function MovieReducer(state, action) {
  switch (action.type) {
    case FETCH_ALL_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case FETCH_ALL_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FAVOURITE_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAVOURITE_MOVIES_SUCCESS:
        const moviesArray = state.movies;
        const getIndex = moviesArray.findIndex(el=>el.id ===action.payload);
        moviesArray[getIndex] = {...moviesArray[getIndex], favorite: true};
      return {
        ...state,
        loading: false,
        movies: moviesArray,
      };
    case FAVOURITE_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RATING_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RATING_MOVIES_SUCCESS:
        const movies = state.movies;
        const index = moviesArray.findIndex(el=>el.id ===action.payload);
        movies[index] = {...movies[index], rating: action.payload};
      return {
        ...state,
        loading: false,
        movies: movies,
      };
    case RATING_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
