import "./App.scss";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Components/Login";
import Signup from "./Components/Sign-up";
import { onCheck} from "./libs/firebaseAuth";



function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);
  const url = useSelector((state) => state.url);


  const baseUrl = location === '' ? `/home` : url === undefined ? '/home' : `/home/${url}`;

  useEffect(() => {

    isLogged ? navigate(baseUrl) : navigate("/login")
    onCheck(user.id);

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
      
    </>
  );
}

export default App;
