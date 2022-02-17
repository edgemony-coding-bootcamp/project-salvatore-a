import style from './ProfileCard.module.scss'

const ProfileCard = (props) => {

    return (
        <div className={style.modal}>
            <div className={style.head}>
                <h1 className={style.title}>Profilo</h1>
                <button className={style.closeButton} onClick={() => props.setShow(false)}>
                    X
                </button>
            </div>
            <img src={props.user.photo} alt={props.user.name}></img>
            <h2 className={style.name}>{`${props.user.name}` + ` ` + `${props.user.lastname}`}</h2>
            <p>Indirizzo email</p>
            <p className={style.email}>{props.user.email}</p>

        </div>
    )
}

export default ProfileCard;