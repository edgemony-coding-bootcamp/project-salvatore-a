import { createContext, useContext, useReducer } from "react";

const initialState = {
  render: false,
  screenWidth: window.innerWidth,
  isVisible: false,
  filter: { filter: "", isOnFocus: false },
  modalInfos: { visibility: false, datas: {} },
  actualUserPlan: "",
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
    case "setActualUserPlan":
      return { ...state, actualUserPlan: action.payload };
    default:
      return state;
  }
};

const GlobalContext = createContext({ state: {}, dispatch: () => {} });
export const UseGlobalContext = () => useContext(GlobalContext);

export default function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActualUserPlan = (userPlan) => {
    dispatch({type: "setActualUserPlan", payload: userPlan})
  }

  return (
    <GlobalContext.Provider value={{ state, dispatch, setActualUserPlan }}>
      {children}
    </GlobalContext.Provider>
  );
}
