
import { useState } from 'react';
import GroupModal from '../GroupModals'
import ProfileModals from '../ProfileModals';
import style from './Modal.module.scss'


const Modal = (props) => {
    const [hidden,setHidden] = useState(false)

   
    return (
        <div className={`${ style.main_wrapper} ${props.trigger && style.hidden_main_wrapper}`}>
        <div className={`${style.wrapper} `}>
            <button onClick={()=>{props.setTrigger(true);setHidden(false)}} className={style.close_modals}>X</button>
            {(()=>{switch (props.type) {
                case  "group":
                    return(
                    <GroupModal group={props.group}
                        setUpdateGroup={props.setUpdateGroup}
                        updateGroup={props.updateGroup}
                        handleChangeName ={props.handleChangeName}
                        handleDeleteGroup={props.handleDeleteGroup}
                    />);
                case "profile":
                    return(
                        <ProfileModals myProfile={props.myProfile} hidden={hidden} setHidden={setHidden}  userData={props.userData} trigger={props.trigger} setTrigger={props.setTrigger}/>
                    )                 
    
                    default:
                    break;
                }})()}
        </div>

        </div>
    )

    
    
}

export default Modal