import style from './Profile.module.scss'
import { useSelector } from "react-redux";


export const Profile = () => {
    const user = useSelector((state) => state.user);
    return (
        <div className={style.profile}>
            <img className={style.profileImg} src={user.photo} alt={user.name} />
            <p>{user.name} {user.lastname}</p>
        </div>
    )
}