import { FETCH_USERS, FETCH_GROUPS, UPDATE_LOGIN, UPDATE_USER, UPDATE_URL, MESSAGE_ID,ACTION_STATUS} from "./constants";

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

const getMessageId = (messageID) => {
  return (dispatch) => {
    dispatch({type: MESSAGE_ID, payload: messageID})
  }
}

const actionStatus = () => {
  return (dispatch) => {
    dispatch({type: ACTION_STATUS})
  }
}

export { fetchUsers, fetchGroups, updateLogin, updateUser, updateUrl, getMessageId, actionStatus };
