import {
  FETCH_USERS,  
  FETCH_GROUPS,
  
} from "./constants";




const fetchUsers = (users) => {
  return async (dispatch) => {
      dispatch({ type: FETCH_USERS, payload: users });    
  };
};
const fetchGroups = (groups) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_GROUPS, payload: groups});    
    };
  };



export {
    fetchUsers,
    fetchGroups
}
