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
  const name = useSelector((state) => state.user.name);
  const photo = useSelector((state) => state.user.photo);

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

      });
    }

  }, [url])



  const [message, setMessage] = useState({
    author: "Giuvanni",
    text: "",
    date: new Date(),
    photo: "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png",
  });
  

  function handleMessage(e) {
    if (e.key === "Enter" || e.keyCode === "13") {
      patchGroups(group.name, [...group.messages, message]);

      setMessage({ ...message, text: "" });
    }
  }
  return (

    <div className={style.messageBlock_container}>
      {group ? <>
        <div className={style.messageBlock}>
          <h2>{group.name || ""}</h2>
          <ul>
            {group.messages.map((message, index) =>
              group.messages.length > 0 ? (
                <Message key={index} data={message} />
              ) : (
                <h3>"nessun messaggio"</h3>
              )
            )}
          </ul>

        <div className={style.input}>
          
          <input
            type="textarea"
            value={message.text}
            onChange={(e) => setMessage({...message, author: name, photo: photo, text: e.target.value })}
            onKeyDown={handleMessage}
            placeholder="Scrivi qui il tuo messaggio"
          />
        </div>
        </div>

      </>
        : <>loading</>}
    </div>

  );
};
