import { createContext, useContext, useReducer } from "react";

const initialState = {
  render: false,
  screenWidth: window.innerWidth,
  isVisible: false,
  filter: { filter: "", isOnFocus: false },
  modalInfos: { visibility: false, datas: {} },
  userMovies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setRender":
      return { ...state, render: !state.render };
    case "setScreenWidth":
      return { ...state, screenWidth: action.payload };
    case "setIsVisible":
      return { ...state, isVisible: !state.isVisible };
    case "setFilter":
      return { ...state, filter: action.payload };
    case "modalInfos":
      return { ...state, modalInfos: action.payload };  
    case "setUserMovies":
      return { ...state, userMovies: action.payload };
    default:
      return state;
  }
};

const GlobalContext = createContext({ state: {}, dispatch: () => {} });
export const UseGlobalContext = () => useContext(GlobalContext);

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
