import { FETCH_ALL_MOVIES_ERROR, FETCH_ALL_MOVIES_SUCCESS, FETCH_ALL_MOVIES_REQUEST } from "./MovieConst";

export default MovieReducer = (state, action) => {
    switch(action.type){
        case FETCH_ALL_MOVIES_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_ALL_MOVIES_SUCCESS:
            return {
                ...state, loading: false, movies: action.payload
            }
        case FETCH_ALL_MOVIES_ERROR:
            return {
                ...state, loading: false, error: action.payload
            }
        default: return state;
    }
}