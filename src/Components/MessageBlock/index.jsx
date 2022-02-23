import { useSelector } from "react-redux";
import { Message } from "../Message";
import { useEffect, useRef, useState } from "react";
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
  where,
  limit,
} from "firebase/firestore";

import { getMessageId } from "../../store/action.js"
import style from "./MessageBlock.module.scss";
import styleMessage from "../Message/Message.module.scss";
import { patchGroups } from "../../libs/firebaseFunctions";
import app from "../../libs/firebase.config";
import MessageBlockModals from "../MessageBlockModals";
import { useDispatch } from "react-redux";

const db = getFirestore(app);

export const MessageBlock = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);
  const authorId = useSelector((state) => state.user.id);

  const [group, setGroup] = useState({ name: "gruppo", messages: [] });
  const [modal, setModal] = useState(false);
  const [updateGroup, setUpdateGroup] = useState({
    name: "",
    messages: [],
  });
  const messageIndex = useSelector(state => state.messageId)

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

  function GetMessageId(index) {
    dispatch(getMessageId(index));
  }


  function handleMessage(e) {
    if (e.key === "Enter" || e.keyCode === "13") {
      patchGroups("messages", group.name, [...group.messages, message]);
      setMessage({ ...message, text: "" });
      GetMessageId(undefined)
    }
  }

  const ulElement = useRef();
  useEffect(() => {
    
    if (ulElement.current.children.length > 0 && messageIndex === undefined) {
      setTimeout(() => {
        ulElement.current.lastChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 200);
    }

     else if(ulElement.current.children.length > 0)
        setTimeout(() => {   
          ulElement.current.children[messageIndex].scrollIntoView({behavior: 'smooth',block:'end'});
          ulElement.current.children[messageIndex].classList.toggle(`${styleMessage.add}`)
          setTimeout(() => {ulElement.current.children[messageIndex].classList.remove(`${styleMessage.add}`)
            }, 3000)
        }, 200); 
               
  }
}, [group.messages,messageIndex]);



  return (

    <>
      {modal && (
        <MessageBlockModals modal={modal} setModal={setModal} group={group} setGroup={setGroup} patchGroups={patchGroups} updateGroup={updateGroup} setUpdateGroup={setUpdateGroup} />

      )}
      <div className={style.messageBlock_container}>
        {group ? (
          <>
            <div className={style.messageBlock}>
              <div className={style.groupName}>
                <div onClick={() => setModal(true)}>
                  <h2>{`#${group.name.replace(/_/g, " ")}  ` || ""}</h2>
                  <p>▼</p>
                </div>
              </div>

              <ul ref={ulElement}>
                {group.messages.map((message, index) =>
                  group.messages.length > 0 ? (
                    <Message key={index} data={message} messages={group.messages} />
                  ) : (
                    <h3>"nessun messaggio"</h3>
                  )
                )}
              </ul>

              <div className={style.input}>
                <label htmlFor="inputText">Scrivi qui</label>
                <input
                  type="textarea"
                  value={message.text}
                  onChange={(e) => setMessage({ ...message, author: authorId, message_group: group.name, message_id: Date.now(), text: e.target.value })}
                  onKeyDown={handleMessage}
                  placeholder="Scrivi qui il tuo messaggio"
                  id="inputText"
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
