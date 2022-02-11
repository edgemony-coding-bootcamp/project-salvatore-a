import "./App.scss";
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import app from "./libs/firebase.config";
import { getGroups, getUser } from "./libs/firebaseFunctions";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Components/Login";
import Signup from "./Components/Sign-up";
import { onCheck, logOut } from "./libs/firebaseAuth";

const db = getFirestore(app);

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.logged);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // const q + onSnapshot possono essere spostati per intero nel componente dove verranno renderizzati gli utenti //

    const q = query(collection(db, "users") /* where("logged","==", true) */);
    onSnapshot(q, (querySnapshot) => {
      getUser(querySnapshot, dispatch);
    });

    const qg = query(collection(db, "groups") /* where("logged","==", true) */);
    onSnapshot(qg, (querySnapshot) => {
      getGroups(querySnapshot, dispatch);
    });
    isLogged ? navigate("/home") : navigate("/");
    onCheck(dispatch, users, user.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <button onClick={() => logOut()}>Esci</button>
    </>
  );
}

export default App;
