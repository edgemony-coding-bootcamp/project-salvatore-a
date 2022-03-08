import "./App.scss";
import { useSelector, useDispatch } from "react-redux";

import { useEffect} from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { onCheck} from "./libs/firebaseAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
 
function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);
  
  const url = useSelector((state) => state.url);
  const baseUrl = location.pathname === '' ? `/home` : url === undefined ? '/home' : `/home/${url}`;
 
  useEffect(() => {
    isLogged ? navigate(baseUrl) : navigate("/login")
    onCheck(user.id, dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged,url,user.status]);

  return (
    <>
       <Routes>
        <Route path="/login" element={
            <Login/> }/>
        <Route path="/home" element={
            <Home /> }/>
        <Route path="/home/:id" element={
            <Home/> }/>
      </Routes>
    </>
  );
}

export default App;
