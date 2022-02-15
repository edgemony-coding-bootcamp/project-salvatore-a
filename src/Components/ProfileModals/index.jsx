import { logOut } from '../../libs/firebaseAuth'
import style from './profileModals.module.scss'


const ProfileModals = (props) => {
    

    return (
    <>
        <div className={`${style.profileModals} ${props.hidden && style.hiddenProfileModals}`}>
             <p>{props.name}</p>
            <button onClick={()=> logOut()}>Esci</button>
        </div>
    </>
    )
}


export default ProfileModals