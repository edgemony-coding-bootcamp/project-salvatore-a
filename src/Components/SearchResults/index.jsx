import style from "./SearchResults.module.scss";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard";
import { useState } from "react";
import searchIcon from "./search_icon.png"

export const SearchResults = (props) => {
  const [showProfile,setShowProfile] = useState(false)

  return (
        <div className={style.searchResults}>
            <div className={style.name} onClick={()=>setShowProfile(true)}>
              <img className={style.icon} src={searchIcon} alt="icona"/>
              <img src={props.text.photo} alt={props.text.name}/>
              <h4 to={`/home/${props.text.message_group}`}>{`${props.text.name} ${props.text.lastname}`}</h4> 
            </div>
            
            {showProfile && <ProfileCard show={showProfile} setShow={setShowProfile} user={props.text}/>}         
            <Link className= {style.results} onClick={()=> {props.setHidden(true); props.setInput('')}} to={`/home/${props.text.message_group}`}> 
              <span> - </span>
              <p>{props.text.text}</p>
            </Link>
         </div>
  )
};
