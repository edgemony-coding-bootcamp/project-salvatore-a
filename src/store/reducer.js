import { FETCH_USERS, FETCH_GROUPS,UPDATE_SELECTED, UPDATE_LOGIN } from "./constants";

const initStore = {
  selected:0,
  users: [],
  groups: [{name:"",messages:[]}],
  logged: false,
};

const myReducer = (state = initStore, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case UPDATE_SELECTED:
      return {
        ...state,
        selected:action.payload
      }
      case UPDATE_LOGIN:
        return {
        ...state,
        logged:action.payload
        }
    default:
      return initStore;
  }
};

export {myReducer}
