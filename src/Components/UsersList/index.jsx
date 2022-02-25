import { useSelector } from 'react-redux'
import ImageProfile from '../ImageProfile'
import style from './UsersList.module.scss'

const UsersList =()=>{
 const users = useSelector(state=> state.users)
    return(
        <>
            <p className={style.title}>Contatti</p>
            <div className={style.wrapper}>
            
                {users.map((user,index)=>(
                    <div className={style.card}>
                    <ImageProfile logged={user.logged} photo={user.photo} trigger={null} mini={true} />
                    <p>{user.name + " "+ user.lastname}</p>
                    </div>
                ))}

            </div>
        </>
    )
}
export default UsersList