import { FETCH_USERS, FETCH_GROUPS } from "./constants";

const initStore = {
  users: [],
  groups: [],
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

    default:
      return initStore;
  }
};

export {myReducer}
