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

import { actionStatus, getMessageId } from "../../store/action.js";
import style from "./MessageBlock.module.scss";
import styleMessage from "../Message/Message.module.scss";
import { patchGroups } from "../../libs/firebaseFunctions";
import app from "../../libs/firebase.config";

import { useDispatch } from "react-redux";
import Modal from "../Modal";


const db = getFirestore(app);

export const MessageBlock = (props) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.url);
  const authorId = useSelector((state) => state.user.id);
  
  
  const [group, setGroup] = useState({ name: "gruppo", messages: [] });

  const [updateGroup, setUpdateGroup] = useState({
    name: "",
    messages: [],
  });
  const messageIndex = useSelector((state) => state.messageId);
  const alternativeMessageId = useSelector(
    (state) => state.alternativeMessageId
  );

 
  useEffect(() => {
    if (url !== undefined) {
      const qg = query(collection(db, "groups"), where("name", "==", url));

      onSnapshot(qg, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          
          setGroup(doc.data());

        });
      });
    } else {
      const qg =
        group.name === "gruppo"
          ? query(collection(db, "groups"), limit(1))
          : query(collection(db, "groups"), where("name", "==", group.name));
       onSnapshot(qg, (querySnapshot) => {
         querySnapshot.forEach( (doc) => {
           setGroup(doc.data());
        });
      });
    }
  }, [url, group.name]);


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
      GetMessageId(undefined);
    }
  }

  const ulElement = useRef();
  useEffect(() => {
    if (ulElement.current.children.length > 0 && messageIndex === undefined) {
      setTimeout(() => {
        ulElement.current.lastChild.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 200);
    } else if (ulElement.current.children.length > 0) {
      ulElement.current.childNodes[messageIndex] &&
        ulElement.current.childNodes[messageIndex].classList.add(
          `${styleMessage.add}`
        );
      setTimeout(() => {
        ulElement.current.children[messageIndex].classList.remove(
          `${styleMessage.add}`
        );
      }, 4000);
      setTimeout(() => {
        ulElement.current.children[messageIndex].scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 200);
    }
  }, [group.messages, messageIndex, alternativeMessageId]);

  const [trigger, setTrigger] = useState(true);

  function handleChangeName(e) {
    e.preventDefault();

    if(updateGroup.name !== ""){let newMessages = group.messages.map((message) => {
      let newMessage = { ...message, message_group: updateGroup.name };
      return newMessage;
    });

    patchGroups("name", group.name, {
      name: updateGroup.name,
      messages: newMessages,
    });
    setTrigger(true);
    setGroup(updateGroup);}
  }

  function handleDeleteGroup() {
    patchGroups("delete", group.name);
    setTrigger(true);
  }

  return (
    <>
      {!trigger && (
        <Modal
          trigger={trigger}
          setTrigger={setTrigger}
          updateGroup={updateGroup}
          setUpdateGroup={setUpdateGroup}
          group={group}
          handleChangeName={handleChangeName}
          handleDeleteGroup={handleDeleteGroup}
          type="group"
        />
      )}
      <div className={style.messageBlock_container}>
        {group.name ? (
          <>
            <div className={style.messageBlock}>
              <div className={style.groupName}>
                <div onClick={() => setTrigger(false)}>
                  <h2>{`#${group.name.replace(/_/g, " ")}  ` || ""}</h2>
                  <p>▼</p>
                </div>
              </div>

              <ul ref={ulElement}>
                {group.messages.map((message, index) =>
                  group.messages.length > 0 ? (
                    <Message
                      key={index}
                      data={message}
                      messages={group.messages}
                      
                    />
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
                  onChange={(e) =>
                    setMessage({
                      ...message,
                      author: authorId,
                      message_group: group.name,
                      message_id: Date.now(),
                      text: e.target.value,
                    })
                  }
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
