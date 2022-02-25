import style from './Profile.module.scss'
import { useSelector } from "react-redux";

import { useState } from 'react';
import Modal from '../Modal';


export const Profile = () => {
    const user = useSelector((state) => state.user);
    
    const [trigger,setTrigger] = useState(true)
    
    return (
        <>
        {!trigger &&  <Modal trigger={trigger} setTrigger={setTrigger} myProfile={true}  type="profile" userData={user} />}
        <div className={style.profile}>
            
            
            
            
            <img onClick={()=> setTrigger(false)} className={style.profileImg} src={user.photo} alt={user.name}  loading="lazy" />
        </div>
        </>
    )
}