import {
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR,
} from "./UserConst";

import { createContext, useContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext({
  users: [],
});

export const useUserContext = () => useContext(UserContext);

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const fetchAllUsers = async () => {
    dispatch({type: FETCH_ALL_USERS_REQUEST})
    try {
        const res = await fetch("https://edgemony-backend.herokuapp.com/users");
        const data = await res.json();
        dispatch({type: FETCH_ALL_USERS_SUCCESS, payload: data})
    } catch (e) {
        dispatch({type: FETCH_ALL_USERS_ERROR, payload: e})
    }
}

  return (
    <UserContext.Provider value={{ users: state.users, fetchAllUsers }}>
      {children}
    </UserContext.Provider>
  );
}
