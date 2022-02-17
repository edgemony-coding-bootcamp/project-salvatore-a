import { logOut } from '../../libs/firebaseAuth'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import style from './profileModals.module.scss'
import ProfileCard from '../ProfileCard';


const ProfileModals = (props) => {
    const dispatch = useDispatch()
    const [showProfile,setShowProfile] = useState(false)    
    

    return (
    <>
    {showProfile && <ProfileCard show={showProfile} setShow={setShowProfile} user={props.userData}/>}
        <div className={`${style.profileModals} ${props.hidden === true  && style.hiddenProfileModals}`}>
            <div className={style.userProfile}>
                <img src={props.userData.photo} alt={props.userData.name}></img>
                <p>{props.userData.name + " " + props.userData.lastname}</p>
            </div>
            <div className={style.buttonModals}>
                <button onClick={()=> {logOut(dispatch); props.setHidden(false)}}>Esci</button>
                <button onClick={()=> {setShowProfile(!showProfile); props.setHidden(true)}}> Profilo </button>
            </div>
        </div>
    </>
    )
}


export default ProfileModals