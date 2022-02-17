import "./App.scss";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Login from "./Components/Login";
import Signup from "./Components/Sign-up";
import { onCheck} from "./libs/firebaseAuth";



function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);
  const url = useSelector((state) => state.url);
  console.log(url)


  const baseUrl = location === '' ? `/home` : url === undefined ? '/home' : `/home/${url}`;

  useEffect(() => {

    isLogged ? navigate(baseUrl) : navigate("/login")
    onCheck(user.id, dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

 
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />      
        <Route path="/signup" element={<Signup />}/>
        <Route path="/edit_profile" element={<EditProfile />}/>
      </Routes>
      
    </>
  );
}

export default App;
