import style from './Profile.module.scss'
import { useSelector } from "react-redux";
import ProfileModals from '../ProfileModals';
import { useState } from 'react';


export const Profile = () => {
    const user = useSelector((state) => state.user);
    const [hidden,setHidden] = useState(false)
    
    return (
        <div className={style.profile}>
            <ProfileModals name={user.name + " " + user.lastname} hidden={hidden}/>
            
            <img onClick={()=> !hidden ? setHidden(true) : setHidden(false)} className={style.profileImg} src={user.photo} alt={user.name} />
        </div>
    )
}