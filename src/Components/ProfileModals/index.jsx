import { logOut } from '../../libs/firebaseAuth'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import style from './ProfileModalProva.module.scss'
import { patchUser } from '../../libs/firebaseFunctions';




const ProfileModals = (props) => {
    const dispatch = useDispatch()
    const userLogged = useSelector((state) => state.user);
    const [banner, setBanner] = useState({type:false});
    const [showProfile,setShowProfile] = useState(false);
    const [user,setUser] = useState(userLogged);

    const handleUpdate = (e) => {
        e.preventDefault();
        setBanner(false)
        patchUser(userLogged.id, user)
        try{
            setBanner({type:true,text:"Profilo Modificato Correttamente"})
            setTimeout(() => {
             setBanner({type:false})   
            }, 2000);
            
        } catch (e){
            setBanner({type:true,text:"Ops, Qualcosa è Andato Storto"})
            setTimeout(() => {
                setBanner({type:false})   
            }, 2000);
        }
        
    }
    

    return (
    <>
    
        <div className={`${style.profileModals}`}>
            <div className={style.userProfile}>
                <img src={props.userData.photo || "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png" } alt={props.userData.name}></img>                
                <h2>{props.userData.name + " " + props.userData.lastname}</h2>
                <p>{props.userData.email}</p>
            </div>
            
                <form onSubmit={handleUpdate} className={` ${!props.hidden ? style.hidden :style.main_group_form }`} >
                    {banner.type && <p>{banner.text}</p>}
                    {props.hidden && 
                        <>
                            <label htmlFor="name">Nome</label>
                            <input placeholder={props.userData.name} id='name' name='name' type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                            <label htmlFor="lastname">Cognome</label>
                            <input placeholder={props.userData.lastname} id='lastname' name='lastname' type="text" onChange={(e) => setUser({ ...user, lastname: e.target.value })} />
                            <label htmlFor="photo">Photo</label>
                            <input placeholder={props.userData.photo} id='photo' name='photo' type="text" onChange={(e) => setUser({ ...user, photo: e.target.value })} />
                            <button>Conferma Modifiche</button>
                        </>
                    }
                </form>
            
            <div className={style.buttonModals}>
                {props.myProfile && 
                    <> 
                        <button  onClick={()=> {setShowProfile(!showProfile); props.setHidden(!props.hidden)}}> Profilo </button>
                        <button  onClick={()=> {logOut(dispatch,user.id); props.setTrigger(false)}}>Log Out</button>
                    </>
                }
            </div>
        </div>
        
    </>
    )
}


export default ProfileModals