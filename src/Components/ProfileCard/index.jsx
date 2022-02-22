import style from './ProfileCard.module.scss'
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
    const auth = getAuth();
    const loggedUser = auth.currentUser;
    const uid = loggedUser.uid;

    return (
        <div className={style.modal_background}>
            <div className={style.modal}>
                <div className={style.head}>

                    <button className={style.closeButton} onClick={() => props.setShow(false)}>
                        X
                    </button>
                </div>
                <img src={props.user.photo} alt={props.user.name}></img>
                <h2 className={style.name}>{props.user.name + ` ` + props.user.lastname}</h2>
                <p className={style.email_black}>Email</p>
                <p className={style.email}>{props.user.email}</p>
                <Link to="/edit_profile">
                    <button className={`${props.user.id !== uid ? style.buttonHidden : style.editButton}`}
                        onClick={() => { props.setShow(false) }}>
                        Modifica
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default ProfileCard;