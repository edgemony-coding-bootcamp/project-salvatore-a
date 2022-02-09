import './App.scss';
import {onSnapshot,query,collection, getFirestore} from 'firebase/firestore'
import {useDispatch,useSelector} from 'react-redux'
import app from "./libs/firebase.config";
import { getGroups, getUser } from './libs/firebaseFunctions';
import { useEffect } from 'react';

import { Searchbar } from './Components/Searchbar';
import { ConversationBlock } from './Components/ConversationBlock';
import {MessageBlock} from './Components/MessageBlock';


const db = getFirestore(app);




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // const q + onSnapshot possono essere spostati per intero nel componente dove verranno renderizzati gli utenti //
    
    const q = query(collection(db, "users") /* where("logged","==", true) */);
    onSnapshot(q, (querySnapshot) => {
      getUser(querySnapshot,dispatch)
    });
  
    const qg = query(collection(db, "groups") /* where("logged","==", true) */);
    onSnapshot(qg, (querySnapshot) => {
      getGroups(querySnapshot,dispatch)
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const users = useSelector(state => state.users)
  const groups = useSelector(state => state.groups)
  console.log(users,groups)
  


  return (
    <>
    <div className="flex-container">
        <Searchbar></Searchbar>
        <ConversationBlock></ConversationBlock>
        <MessageBlock></MessageBlock>
        
      </div>
    </>
  );
}

export default App;