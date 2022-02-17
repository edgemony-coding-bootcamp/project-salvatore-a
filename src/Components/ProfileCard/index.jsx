import style from './ProfileCard.module.scss'
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
    const auth = getAuth();
    const loggedUser = auth.currentUser;
    const uid = loggedUser.uid;
    const photo = props.user.photo || "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png"

    return (
        <div className={style.modal}>
            <div className={style.head}>
                <h1 className={style.title}>Profilo</h1>
                <button className={style.closeButton} onClick={() => props.setShow(false)}>
                    X
                </button>
            </div>
            <img src={props.user.photo} alt={props.user.name}></img>
            <h2 className={style.name}>{props.user.name+ ` ` + props.user.lastname}</h2>
            <p>Indirizzo email</p>
            <p className={style.email}>{props.user.email}</p>
            <Link to="/edit_profile">
                <button disabled={uid === props.user.id ? "" : "true"}
                    className={style.editButton}
                    onClick={() => { props.setShow(false) }}>
                    Modifica
                </button>
            </Link>

        </div>
    )
}

export default ProfileCard;