import {
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR,
} from "./UserConst";

export default function UserReducer(state, action) {
  switch (action.type) {
    case FETCH_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case FETCH_ALL_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
