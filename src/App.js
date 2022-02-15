import "./App.scss";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Components/Login";
import Signup from "./Components/Sign-up";
import { onCheck, logOut } from "./libs/firebaseAuth";



function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.logged);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const url = useSelector((state) => state.url);


  const baseUrl = location === '' ? `/home` : url === undefined ? '/home' : `/home/${url}`;

  useEffect(() => {

    isLogged ? navigate(baseUrl) : navigate("/login")
    onCheck(dispatch, users, user.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />      
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <button onClick={() => logOut(dispatch)}>Esci</button>
    </>
  );
}

export default App;
