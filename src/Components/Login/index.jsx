

import React, { useState } from "react";
import { signIn } from "../../libs/firebaseAuth";
import style from './Login.module.scss'




const Login = () => {
    const [user,setUser] = useState({})
    const handleLogin = (e)=>{
        e.preventDefault();
        signIn(user)
    }


    return(
        <>
            <div className={style.login}>
                <form onSubmit={handleLogin}>
                    <input onChange={(e)=> setUser({...user,email:e.target.value})} type="email" placeholder="email" />
                    <input onChange={(e)=> setUser({...user,password:e.target.value})} type="password"  placeholder="password"/>
                    <button>Accedi</button>
                </form>
                <h3>Non hai un account ? <a href="/signup">Registrati</a> </h3>
            </div>
        </>
    )
}


export default Login