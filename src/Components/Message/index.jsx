import style from "./Message.module.scss";
import ShowTime from "../ShowTime";
import { useEffect, useState } from 'react';
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
  where,
} from "firebase/firestore";
import ProfileCard from "../ProfileCard";

import app from "../../libs/firebase.config";


const db = getFirestore(app);

function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setTime(secs*1000);
  return t;
}

export const Message = (props) => {
  const message = props.data;
  const date = message.date || { seconds: 1644405843 };
  const [user, setUser] = useState({name:"", lastname:"", photo:message.photo, id:"", email:""});

  useEffect(() => {
    
      const qu = query(collection(db, "users"), where("id", "==", message.author));
      onSnapshot(qu, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      });
    
  }, [message]);
  

  const [showProfile,setShowProfile] = useState(false)    


  return (
    <>
      {showProfile && <ProfileCard show={showProfile} setShow={setShowProfile} user={user} />}
      <li className={style.message}>
        <div className={style.author}>
          <img src={user.photo} alt={user.name} onClick={() => setShowProfile(!showProfile)} />
          <div className={style.nameText}>
            <div className={style.authorDate}>
              <h3>{user.name + " " + user.lastname}</h3>
              <ShowTime date={toDateTime(date.seconds)} />
            </div>
            <p>{message.text}</p>
          </div>

        </div>
      </li>
    </>
  );
};
