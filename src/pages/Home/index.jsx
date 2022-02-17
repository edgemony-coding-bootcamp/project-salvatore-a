import {
  onSnapshot,
  query,
  collection,
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../libs/firebase.config";
import { getUser, getGroups } from "../../libs/firebaseFunctions"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../../store/action'

import { Header } from "../../Components/Header";
import { ConversationBlock } from "../../Components/ConversationBlock";
import { MessageBlock } from "../../Components/MessageBlock";

export const db = getFirestore(app);


const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  let uid = "";

  useEffect(() => {
    // const q + onSnapshot possono essere spostati per intero nel componente dove verranno renderizzati gli utenti //
    const qg = query(collection(db, "groups") /*, where("name","==", url)*/);
    onSnapshot(qg, (querySnapshot) => {
      getGroups(querySnapshot, dispatch);
    })

    const q = query(collection(db, "users") /* where("logged","==", true) */);
    onSnapshot(q, (querySnapshot) => {
      getUser(querySnapshot, dispatch);
    });


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    
    if (user) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      uid = user.uid;
      const filteredUser = users.filter(x => x.id === uid)
      
      filteredUser.length > 0 && dispatch(updateUser(filteredUser[0]))
      
      
    } else {
      console.log("no user")
    }
    

  }, [users])
  
  return (
    <div className="flex-container">

      <Header />

      <div className="main">
        <ConversationBlock />
        <MessageBlock />
      </div>

    </div>
  )
};

export default Home;