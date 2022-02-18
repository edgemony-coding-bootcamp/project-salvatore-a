import { useSelector } from "react-redux";
import { Message } from "../Message";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
  where,
  limit,
} from "firebase/firestore";

import style from "./MessageBlock.module.scss";
import { patchGroups } from "../../libs/firebaseFunctions";
import app from "../../libs/firebase.config";
import { Link } from "react-router-dom"


const db = getFirestore(app);

export const MessageBlock = () => {
  
  const url = useSelector((state) => state.url);
  const authorId = useSelector((state) => state.user.id);

  const [group, setGroup] = useState({ name: "gruppo", messages: [] });
  const [modal, setModal] = useState(false);
  const [updateGroup, setUpdateGroup] = useState({
    name:"",
    messages: [],
  });

  

  useEffect(() => {
    if (url !== undefined) {
      const qg = query(collection(db, "groups"), where("name", "==", url));
      onSnapshot(qg, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setGroup(doc.data());
          
          
        });
      });
    } else {
      const qg = query(collection(db, "groups"), limit(1));
      onSnapshot(qg, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setGroup(doc.data());
          
          
        });
      });
    }
  }, [url]);

  const [message, setMessage] = useState({
    author: authorId,
    text: "",
    date: new Date(),
    photo: "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png",
  });


  function handleMessage(e) {
    if (e.key === "Enter" || e.keyCode === "13") {
      patchGroups("messages", group.name, [...group.messages, message]);

      setMessage({ ...message, text: "" });
    }
  }
  function handleChangeName(e) {
    e.preventDefault();
    patchGroups("name", group.name, updateGroup);
    setModal(false);
    setGroup(updateGroup);    
  }

  console.log(updateGroup)

  return (

    <>
      <div className={modal ? style.modalBackground : null}>
        {modal && (
          <div className={modal ? style.groupModal : null}>
            <h2>{`#${group.name}  ` || ""}</h2>
            <form onSubmit={(e) => handleChangeName(e)}>
              <label htmlFor="updateGroup">Cambia il Nome del Gruppo:</label>
              <input
                value={updateGroup.name}
                onChange={(e) =>
                  setUpdateGroup({
                    messages: group.messages,
                    name: e.target.value.replace(/ /g,"_"),
                  })
                }
                name="updateGroup"
                type="text"
              />
              <button onClick={handleChangeName} className={style.modifyButton}><Link to={`/home/${updateGroup.name}`}>Modifica</Link></button>
            </form>
            <div className={style.deleteGroup}>
              <p>Elimina Gruppo</p>
              <button onClick={()=> {patchGroups("delete",group.name);setModal(false)} } className={style.deleteButton}>
              <Link to={`/home`}>Elimina</Link>
              </button>
            </div>
            <button
              className={style.closeButton}
              onClick={() => setModal(false)}
            >
              Chiudi
            </button>
          </div>
        )}
      </div>
      <div className={style.messageBlock_container}>
        {group ? (
          <>
            <div className={style.messageBlock}>
              <div className={style.groupName}>
                <div onClick={() => setModal(true)}>
                  <h2>{`#${group.name.replace(/_/g," ")}  ` || ""}</h2>
                  <p>▼</p>
                </div>
              </div>

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
                  onChange={(e) => setMessage({...message, author: authorId, text: e.target.value })}
                  onKeyDown={handleMessage}
                  placeholder="Scrivi qui il tuo messaggio"
                />
              </div>
            </div>
          </>
        ) : (
          <>loading</>
        )}
      </div>
    </>

  );
};
