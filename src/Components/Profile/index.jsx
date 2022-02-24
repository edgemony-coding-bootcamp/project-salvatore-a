import style from './Profile.module.scss'
import { useSelector } from "react-redux";

import { useState } from 'react';
import Modal from '../Modal';


export const Profile = () => {
    const user = useSelector((state) => state.user);
    
    const [trigger,setTrigger] = useState(true)
    
    return (
        <div className={style.profile}>
            
            <Modal trigger={trigger} setTrigger={setTrigger} myProfile={true}  type="profile" userData={user} />
            
            
            <img onClick={()=> setTrigger(false)} className={style.profileImg} src={user.photo} alt={user.name}  loading="lazy" />
        </div>
    )
}