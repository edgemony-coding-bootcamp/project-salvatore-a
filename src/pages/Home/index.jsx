
import { Header } from "../../Components/Header";

import { ConversationBlock } from "../../Components/ConversationBlock";
import { MessageBlock } from "../../Components/MessageBlock";
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
} from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import app from "../../libs/firebase.config";
import {  getUser, getGroups } from "../../libs/firebaseFunctions"

export const db = getFirestore(app);



const Home = () => {

  const dispatch = useDispatch();
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

  
    return (
          <div className="flex-container">

            <Header/>
      
            <div className="main"> 
              <ConversationBlock/>
              <MessageBlock/>
            </div>

          </div>
    )
};

export default Home;