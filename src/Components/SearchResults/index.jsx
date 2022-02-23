import style from "./SearchResults.module.scss";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard";
import { useState } from "react";
import { getMessageId } from "../../store/action.js"
import { useSelector, useDispatch} from "react-redux";

import searchIcon from "./search_icon.png"


export const SearchResults = (props) => {
  const dispatch = useDispatch();
  const [showProfile,setShowProfile] = useState(false)
  const messageIndex = useSelector(state => state.messageId)
  console.log(messageIndex)

  function GetMessageId(index) {
    dispatch(getMessageId(index));
  }

//   function cutPhrase(text,nWords) {
//     const firstNwords = text.split(' ').slice(0, nWords).join(' ');
//     return firstNwords;
// }

  return (
        <div className={style.searchResults}>
            <div className={style.name} onClick={()=>setShowProfile(true)}>
              <img className={style.icon} src={searchIcon} alt="icona"/>
              <img src={props.text.photo} alt={props.text.name}/>
              <h4 to={`/home/${props.text.message_group}`}>{`${props.text.name} ${props.text.lastname}`}</h4> 
            </div>
            {showProfile && <ProfileCard show={showProfile} setShow={setShowProfile} user={props.text}/>}  
                   
            <Link className= {style.results} onClick={()=> {props.setHidden(true); props.setInput('')}} to={`/home/${props.text.group_name}`}>    
              <div className={style.text}>
                <span> - </span>
                <p onClick={()=> GetMessageId(props.text.index)}>{props.text.text}</p>
              </div>
              <div className={style.group}>
                <p>{`in:#${props.text.group_name.replace(/_/g," ")}`}</p>
              </div>
            </Link>
         </div>
  )
};
