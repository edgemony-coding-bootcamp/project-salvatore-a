import style from "./MessageBlock.module.scss";
import { useSelector } from "react-redux";
import { Message } from "../Message";
import { useState } from "react";

import { patchGroups } from "../../libs/firebaseFunctions";

export const MessageBlock = () => {
  const index = useSelector((state) => state.selected);
  const group = useSelector((store) => store.groups[index]);

  const [message, setMessage] = useState({
    author: "Giuvanni",
    text: "",
    date: new Date(),
  });
  function handleMessage(e) {
    if (e.key === "Enter" || e.keyCode === "13") {
      patchGroups(group.name, [...group.messages, message]);
      
      setMessage({...message,text:""});
    }
  }
  return (
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
      <div className="input">
        <p>Scrivi qui il testo</p>
        <input
          type="textarea"
          value={message.text}
          onChange={(e) => setMessage({ ...message, text: e.target.value })}
          onKeyDown={handleMessage}
        />
      </div>
    </div>
  );
};
