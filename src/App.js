import './App.scss';
import { onSnapshot, query, collection, getFirestore } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import app from "./libs/firebase.config";
import { getGroups, getUser } from './libs/firebaseFunctions';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home"
import Login from "./Components/Login";
import Signup from "./Components/Sign-up"

const db = getFirestore(app);




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // const q + onSnapshot possono essere spostati per intero nel componente dove verranno renderizzati gli utenti //

    const q = query(collection(db, "users") /* where("logged","==", true) */);
    onSnapshot(q, (querySnapshot) => {
      getUser(querySnapshot, dispatch)
    });

    const qg = query(collection(db, "groups") /* where("logged","==", true) */);
    onSnapshot(qg, (querySnapshot) => {
      getGroups(querySnapshot, dispatch)
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLogged = useSelector(state=> state.logged);

  return (
    <>

       <Routes>
       {/* {isLogged ?  :}  */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>

       </Routes>

    </>
  );
}

export default App;