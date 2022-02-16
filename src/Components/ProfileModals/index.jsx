import { logOut } from '../../libs/firebaseAuth'
import { useDispatch } from "react-redux";
import style from './profileModals.module.scss'


const ProfileModals = (props) => {
    const dispatch = useDispatch()    

    return (
    <>
        <div className={`${style.profileModals} ${props.hidden && style.hiddenProfileModals}`}>
             <p>{props.name}</p>
            <button onClick={()=> logOut(dispatch)}>Esci</button>
        </div>
    </>
    )
}


export default ProfileModals