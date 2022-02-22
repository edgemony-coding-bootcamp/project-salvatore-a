import { useSelector } from "react-redux";
import { Message } from "../Message";
import { useEffect,  useRef,  useState } from "react";
import {
  onSnapshot,
  query,
  collection,
  getFirestore,
  where,
  limit,
} from "firebase/firestore";


import { patchGroups } from "../../libs/firebaseFunctions";
import app from "../../libs/firebase.config";
import MessageBlockModals from "../MessageBlockModals";
import style from "./MessageBlock.module.scss";


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
  
  const ulElement = useRef();
  useEffect(() => {
    if(group.messages.length > 0){
      setTimeout(() => {
        ulElement.current.lastChild.scrollIntoView({behavior: 'smooth',block:'end'});
        
        console.log(ulElement.current.childElementCount)
      }, 200);    
    }
  }, [group.messages]);
  
  

  return (

    <>
      <div className={modal ? style.modalBackground : null}>
        {modal && (
          <MessageBlockModals modal={modal} setModal={setModal} group={group} setGroup={setGroup} patchGroups={patchGroups} updateGroup={updateGroup} setUpdateGroup={setUpdateGroup}  />
          
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

              <ul ref={ulElement}>
                {group.messages.map((message, index) =>
                  group.messages.length > 0 ? (
                    <Message  key={index} data={message} messages={group.messages} />
                  ) : (
                    <h3>"nessun messaggio"</h3>
                  )
                )}
              </ul>

              <div className={style.input}>
                <input
                  type="textarea"
                  value={message.text}
                  onChange={(e) => setMessage({...message, author: authorId,message_group:group.name,message_id:Date.now(), text: e.target.value })}
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
