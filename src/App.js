import "./App.scss";
import { useSelector, useDispatch } from "react-redux";

import { useEffect, lazy, Suspense,} from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { onCheck} from "./libs/firebaseAuth";

import {Loader} from "./Components/Loader";

const Home = lazy(()=> import ("./pages/Home"));

const Login = lazy(()=> import ("./pages/Login"));


function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);
  
  const url = useSelector((state) => state.url);
  const baseUrl = location === '' ? `/home` : url === undefined ? '/home' : `/home/${url}`;
  
  useEffect(() => {

    isLogged ? navigate(baseUrl) : navigate("/login")
    onCheck(user.id, dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged,url,user.status]);

  return (
    <>
       <Routes>
        <Route path="/login" element={
          <Suspense fallback={<Loader />}>
            <Login/> 
          </Suspense>} />
        <Route path="/home" element={
          <Suspense fallback={<Loader />}>
            <Home /> 
          </Suspense>} />
        <Route path="/home/:id" element={
          <Suspense fallback={<Loader />}>
            <Home/> 
          </Suspense>} />  
        
      </Routes>
    </>
  );
}

export default App;
