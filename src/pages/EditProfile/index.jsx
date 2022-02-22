import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { patchUser } from "../../libs/firebaseFunctions";
import Banner from "../../Components/Banner";
import style from "../../libs/Form.module.scss";


const EditProfile = () => {
    const userLogged = useSelector((state) => state.user);
    const [banner, setBanner] = useState(false);
    const [color, setColor] = useState();
    const [user, setUser] = useState(userLogged)


    const handleUpdate = (e) => {
        e.preventDefault();
        setBanner(false)
        patchUser(userLogged.id, user)
        try{
            setColor("green")
        } catch (e){
            setColor("red")
        }
        setBanner(true)
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.wrapper_form}>
                    <form onSubmit={handleUpdate}>
                        <h2> Modifica Profilo </h2>

                        <div className={style.wrapper_item}>
                            {/* <label> Anteprima foto </label> */}
                            <img src={user.photo || userLogged.photo} alt={user.name || userLogged.name}></img>
                        </div>

                        <div className={style.wrapper_item}>
                            <label htmlFor="userPhoto" > Foto </label>
                            <input onChange={(e) => setUser({ ...user, photo: e.target.value })} type="text" placeholder={userLogged.photo} id="userPhoto" />
                        </div>

                        <div className={style.wrapper_item}>
                            <label htmlFor="userName"> Nome </label>
                            <input onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder={userLogged.name} id="userName" />
                        </div>

                        <div className={style.wrapper_item}>
                            <label htmlFor="userSurname"> Cognome </label>
                            <input onChange={(e) => setUser({ ...user, lastname: e.target.value })} type="text" placeholder={userLogged.lastname} id="userSurname"/>
                        </div>

                        <button>Invia Modifiche</button>
                        {banner && <Banner value={color} />}
                    </form>
                    <p>Torna alla <Link to="/home">Home</Link> </p>
                </div>
            </div>

        </>
    )
}

export default EditProfile;