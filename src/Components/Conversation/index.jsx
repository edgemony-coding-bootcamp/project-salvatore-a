
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUrl, getMessageId } from "../../store/action";
import { addGroup } from "../../libs/firebaseFunctions";
import { useEffect, useState } from "react";
import style from "./Conversation.module.scss";

export const Conversation = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [newGroup, setNewGroup] = useState("");
  const [isActive, setActive] = useState();
  const groups = useSelector((store) => store.groups);
  const url = useSelector((store) => store.url);



  function upDateUrl(url) {
    dispatch(updateUrl(url));
  }
  const params = useParams();
  function handleInput(e) {
    if (e.key === "Enter" || e.keyCode === "13") {
      addGroup(newGroup.replace(/ /g, "_"));
      setNewGroup("");
      setIsClicked(!isClicked);
    }
  }
  useEffect(() => {
    upDateUrl(params.id);
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, url]);
 
  useEffect(() => {
    groups.map((group, i) => (group.name === url ? toggleActive(i) : null));
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const toggleActive = (i) => {
    setActive(i);
  };

  function GetMessageId(index) {
    dispatch(getMessageId(index));
  }

  const component = props.component;

  return (
    <>
      <p className={style.channelName}>Canali</p>
      <div className={style.conversation} >

        <div className={style.list}>
          {groups.length > 0 ? (
            groups.map((group, i) => (
              <Link
                onClick={() => {
                  GetMessageId(undefined);
                  props.offSet !== undefined && props.offSet.offsetHeight !== 0 && props.setHideGroup(!props.hideGroup);
                }}
                
                to={`/home/${group.name}`}
                key={group.name}
                replace
              >
                <div
                  className={isActive === i ? style.active : null}
                  onClick={() => toggleActive(i)}
                >
                  <span>#</span>
                  <p>{group.name.replace(/_/g, " ")}</p>
                </div>
              </Link>
            ))
          ) : (
            <li>Nessun Gruppo</li>
          )}
        </div>
        </div>
        <div className={style.newgroup__wrapper}>
          <button onClick={() => setIsClicked(!isClicked)}>
            {!isClicked ? "+" : "×"}{" "}
          </button>
          <label htmlFor={component}>Aggiungi gruppo</label>
          <input
            className={`${style.addGroup} ${isClicked && style.hiddenAddGroup}`}
            type="textarea"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            onKeyDown={handleInput}
            placeholder="Premi Invio Per Confermare"
            id={component}
          />{" "}
          <p>Aggiungi Gruppo</p>
        </div>
      
    </>
  );
};
