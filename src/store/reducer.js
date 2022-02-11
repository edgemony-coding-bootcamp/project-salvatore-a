import { FETCH_USERS, FETCH_GROUPS,UPDATE_SELECTED, UPDATE_LOGIN, UPDATE_USER } from "./constants";

const initStore = {
  selected:0,
  users: [],
  groups: [{name:"",messages:[]}],
  logged: false,
  user:{
    id:"",
    name:"",
    lastname:"",
    photo:"",
    email:""
  }
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
      case UPDATE_USER:
        const payload = action.payload
        
        return {
          ...state,
          user:{
            id:payload.id,
            name:payload.name,
            lastname:payload.lastname,
            photo:`${payload.photo !== "" ? payload.photo : ""}`,
            email: payload.email
          }
        } 
    default:
      return initStore;
  }
};

export {myReducer}
