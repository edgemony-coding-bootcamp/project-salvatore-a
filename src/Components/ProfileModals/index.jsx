import { logOut } from '../../libs/firebaseAuth'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import style from './ProfileModalProva.module.scss'


// eslint-disable-next-line no-lone-blocks
{/*  import ProfileCard from '../ProfileCard';
   {showProfile && <ProfileCard show={showProfile} setShow={setShowProfile} user={props.userData}/>}
 */}

const ProfileModals = (props) => {
    const dispatch = useDispatch()
    const [showProfile,setShowProfile] = useState(false)    
    
    

    return (
    <>
    
        <div className={`${style.profileModals}`}>
            <div className={style.userProfile}>
                <img src={props.userData.photo} alt={props.userData.name}></img>
                <h3>{props.userData.name + " " + props.userData.lastname}</h3>
            </div>
            
                <form className={` ${!props.hidden ? style.hidden :style.main_group_form }`} >
                    {props.hidden && 
                        <>
                            <label htmlFor="name">Nome</label>
                            <input placeholder={props.userData.name} id='name' name='name' type="text" />
                            <label htmlFor="lastname">Cognome</label>
                            <input placeholder={props.userData.lastname} id='lastname' name='lastname' type="text" />
                            <label htmlFor="photo">Photo</label>
                            <input placeholder={props.userData.photo} id='photo' name='photo' type="text" />
                        </>
                    }
                </form>
            
            <div className={style.buttonModals}>
                <button  onClick={()=> {setShowProfile(!showProfile); props.setHidden(!props.hidden)}}> Profilo </button>
                <button  onClick={()=> {logOut(dispatch); props.setTrigger(false)}}>Log Out</button>
            </div>
        </div>
        
    </>
    )
}


export default ProfileModals