import { FETCH_USERS, FETCH_GROUPS, UPDATE_LOGIN, UPDATE_USER, UPDATE_URL, UPDATE_MODAL } from "./constants";

const initStore = {
  modal: false,
  users: [],
  groups: [{ name: "", messages: [] }],
  logged: false,
  user: {
    id: "",
    name: "",
    lastname: "",
    photo: "",
    email: ""
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
    case UPDATE_MODAL:
      return {
        ...state,
        modal: action.payload
      }
    case UPDATE_URL:
      return {
        ...state,
        url: action.payload
      }
    case UPDATE_LOGIN:
      return {
        ...state,
        logged: action.payload
      }
    case UPDATE_USER:
      const payload = action.payload

      return {
        ...state,
        user: {
          id: payload.id,
          name: payload.name,
          lastname: payload.lastname,
          photo: `${payload.photo !== "" ? payload.photo : "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png"}`,
          email: payload.email
        }
      }
    default:
      return initStore;
  }
};

export { myReducer }
