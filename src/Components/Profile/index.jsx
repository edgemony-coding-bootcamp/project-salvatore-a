import style from './Profile.module.scss'



export const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.profileImg}></div>
            <p>Pippo</p>
        </div>
    )
}