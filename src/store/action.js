import { FETCH_USERS, FETCH_GROUPS,UPDATE_SELECTED } from "./constants";

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

const updateSelected = (index) => {
  return async (dispatch) => {
    dispatch({type: UPDATE_SELECTED, payload: index})
  }
}

export { fetchUsers, fetchGroups, updateSelected };
