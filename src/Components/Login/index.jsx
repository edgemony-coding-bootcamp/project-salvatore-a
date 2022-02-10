

import React, { useState, useEffect } from "react";
import { signIn } from "../../libs/firebaseAuth";
import style from './Login.module.scss'
import { getAuth, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { updateLogin } from "../../store/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.logged);

    const [user,setUser] = useState({})
    const handleLogin = (e)=>{
        e.preventDefault();
        auth.currentUser == null ? navigate("/") : setUser(auth.currentUser);

        
        console.log(user);
    }
    
    const navigate = useNavigate();


    useEffect(()=> {
        dispatch(updateLogin(true))
        console.log(isLogged);
        navigate("/home");
    },[user]);

    const handleSignout = (e) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log(auth.currentUser);
          });
        }

    return(
        <>
            <div className={style.login}>
                <form onSubmit={handleLogin}>
                    <input onChange={(e)=> setUser({...user,email:e.target.value})} type="email" placeholder="email" />
                    <input onChange={(e)=> setUser({...user,password:e.target.value})} type="password"  placeholder="password"/>
                    <button >Accedi</button>
                </form>
                <button onClick={handleSignout}>Esci</button>
                <h3>Non hai un account ? <a href="/signup">Registrati</a> </h3>
            </div>
        </>
    )
}


export default Login