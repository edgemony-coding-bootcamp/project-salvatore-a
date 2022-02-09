import './App.scss';
import {onSnapshot,query,collection, getFirestore} from 'firebase/firestore'
import {useDispatch,useSelector} from 'react-redux'
import app from "./libs/firebase.config";
import { getGroups, getUser } from './libs/firebaseFunctions';
import { useEffect } from 'react';
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
      <div className="searchbar">
        <h1>searchbar</h1>
      </div>
      <div className="flexItem-chatt">
        <div className="conversations">
          <div className="userProfile">
            <div className="profile"></div>
            <h4>Pippo</h4>
          </div>
          <h1>Conversazioni</h1>
        </div>
        <div className="messages">
          <h2>Nome </h2>
          <ul>
            <li>
              <h3>Nome utente</h3>
              <h5>Giorno e Data</h5>
              <p>Text</p>
            </li>
          </ul>
          <div className="input">
            <p>Scrivi qui il testo</p>
            <input type="textarea"/>
          </div>
           </div>
      </div>
    </div>
    </>
  );
}

export default App;