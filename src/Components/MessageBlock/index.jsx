import { useSelector } from "react-redux";
import { Message } from "../Message";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
  where,
  limit
} from "firebase/firestore";

import style from "./MessageBlock.module.scss";
import { patchGroups } from "../../libs/firebaseFunctions";
import app from "../../libs/firebase.config";

const db = getFirestore(app);


export const MessageBlock = () => {
  
  const url = useSelector((state) => state.url);
 
  const [group, setGroup] = useState({ name: "gruppo", messages: [] })
 
  useEffect(() => {
    if (url !== undefined) {
      const qg = query(collection(db, "groups"), where("name", "==", url));
      onSnapshot(qg, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setGroup(doc.data())
        });

      });
    } else {   
      const qg = query(collection(db, "groups"), limit(1));
      onSnapshot(qg, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setGroup(doc.data())
      });

    });}
    
  }, [url])



  const [message, setMessage] = useState({
    author: "Giuvanni",
    text: "",
    date: new Date(),
  });
  function handleMessage(e) {
    if (e.key === "Enter" || e.keyCode === "13") {
      patchGroups(group.name, [...group.messages, message]);

      setMessage({ ...message, text: "" });
    }
  }
  return (
<>
      <div className={style.messageBlock_container}>
        <div className={style.messageBlock}>
         {group ?  <h2>{group.name || ""}</h2>
          <ul>
            {group.messages.map((message, index) =>
              group.messages.length > 0 ? (
                <Message key={index} data={message} />
              ) : (
                <h3>"nessun messaggio"</h3>
              )
            )}
          </ul>
          
        </div>

        <div className={style.input}>
            <p>Scrivi qui il testo</p>
            <input
              type="textarea"
              value={message.text}
              onChange={(e) => setMessage({ ...message, text: e.target.value })}
              onKeyDown={handleMessage}
            />
          </div> : <>loading</> }
        </div>
</>
  );
};
