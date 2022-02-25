import style from "./SearchResults.module.scss";
import { Link } from "react-router-dom";

import { useState } from "react";
import { getMessageId } from "../../store/action.js"
import { useSelector, useDispatch } from "react-redux";

import searchIcon from "./search_icon.png"
import Modal from "../Modal";


export const SearchResults = (props) => {
  const myUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [trigger,setTrigger] = useState(true)
  const messageIndex = useSelector(state => state.messageId)
  console.log(messageIndex)

  function GetMessageId(index) {
    dispatch(getMessageId(index));
  }

  //   function cutPhrase(text,nWords) {
  //     const firstNwords = text.split(' ').slice(0, nWords).join(' ');
  //     return firstNwords;
  // }
  const goToResult = () => {
    props.setHidden(true);
    props.setInput('');
    GetMessageId(props.text.index)
    

    console.log(props)
    
  }

  return (
    <div className={style.searchResults}>
      <div className={style.name} onClick={() => setTrigger(false)}>
        <img className={style.icon} src={searchIcon} alt="icona" loading="lazy" />
        <img src={props.text.photo} alt={props.text.name} loading="lazy" />
        <h4 to={`/home/${props.text.message_group}`}>{`${props.text.name} ${props.text.lastname}`}</h4>
      </div>
      {!trigger && <Modal  trigger={trigger} setTrigger={setTrigger}   type="profile" userData={props.text} myProfile={props.text.photo === myUser.photo ? true : false}  />}

      <Link className={style.results} onClick={goToResult} to={`/home/${props.text.message_group}`}>
        <div className={style.text}>
          <span> - </span>
          <p>{props.text.text}</p>
        </div>
        <div className={style.group}>
          <p>{`in:#${props.text.message_group.replace(/_/g, " ")}`}</p>
        </div>
      </Link>
    </div>
  )
};
