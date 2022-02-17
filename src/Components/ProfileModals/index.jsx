import { logOut } from '../../libs/firebaseAuth'
import { useDispatch } from "react-redux";
import style from './profileModals.module.scss'


const ProfileModals = (props) => {
    const dispatch = useDispatch()    
    

    return (
    <>
        <div className={`${style.profileModals} ${props.hidden === true  && style.hiddenProfileModals}`}>
            <div className={style.userProfile}>
                <img src={props.photo} alt={props.name}></img>
                <p>{props.name}</p>
            </div>
            <div className={style.buttonModals}>
                <button onClick={()=> {logOut(dispatch); props.setHidden(false)}}>Esci</button>
                <button> Profilo </button>
            </div>
        </div>
    </>
    )
}


export default ProfileModals