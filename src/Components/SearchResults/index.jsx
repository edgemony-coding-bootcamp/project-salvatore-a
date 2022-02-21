import style from "./SearchResults.module.scss";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard";
import { useState } from "react";
import { getMessageId } from "../../store/action.js"
import { useSelector, useDispatch} from "react-redux";

export const SearchResults = (props) => {
  const dispatch = useDispatch();
  const [showProfile,setShowProfile] = useState(false)
  const messageIndex = useSelector(state => state.messageId)
  console.log(messageIndex)

  function GetMessageId(index) {
    dispatch(getMessageId(index));
  }

  return (
        <div className={style.searchResults}>
            <div className={style.name} onClick={()=>setShowProfile(true)}>
              <img src="https://img.icons8.com/external-others-phat-plus/64/000000/external-classmate-education-and-learning-outline-others-phat-plus-23.png" alt="icona"/>
              <img src={props.text.photo} alt={props.text.name}/>
              <h4 to={`/home/${props.text.message_group}`}>{`${props.text.name} ${props.text.lastname}`}</h4> 
            </div>
            
            {showProfile && <ProfileCard show={showProfile} setShow={setShowProfile} user={props.text}/>}         
            <Link className= {style.results} onClick={()=> {props.setHidden(true); props.setInput('')}} to={`/home/${props.text.message_group}`}> 
              <span> - </span>
              <p onClick={()=> GetMessageId(props.text.index)}>{props.text.text}</p>
            </Link>
         </div>
  )
};
