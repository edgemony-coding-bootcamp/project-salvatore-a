import { logOut } from '../../libs/firebaseAuth'
import { useDispatch } from "react-redux";
import style from './profileModals.module.scss'


const ProfileModals = (props) => {
    const dispatch = useDispatch()    

    return (
    <>
        <div className={`${style.profileModals} ${props.hidden === true  && style.hiddenProfileModals}`}>
             <p>{props.name}</p>
            <button onClick={()=> {logOut(dispatch); props.setHidden(false)}}>Esci</button>
        </div>
    </>
    )
}


export default ProfileModals