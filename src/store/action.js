import { FETCH_USERS, FETCH_GROUPS,UPDATE_MODAL, UPDATE_LOGIN, UPDATE_USER, UPDATE_URL } from "./constants";

const fetchUsers = (users) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS, payload: users });
  };
};
const fetchGroups = (groups) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_GROUPS, payload: groups });
  };
};

const updateShowModal = (show) => {
  return (dispatch) => {
    dispatch({type: UPDATE_MODAL, payload: show})
  }
}


const updateUrl = (url) => {
  return (dispatch) => {
    dispatch({type: UPDATE_URL, payload: url})
  }
}

const updateLogin = (logged) => {
  return async(dispatch) => {
    dispatch({ type: UPDATE_LOGIN, payload:logged})
  }
}

const updateUser = (user) => {
  return async(dispatch)=> {
    dispatch({type: UPDATE_USER,payload:user})
  }
}

export { fetchUsers, fetchGroups, updateShowModal, updateLogin, updateUser, updateUrl };
