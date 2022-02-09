import React, { useState } from "react";
import { signup } from "../../libs/firebaseAuth";

import style from './Signup.module.scss'



const Signup = () => {
    const [user,setUser] = useState({})

    const handleSignup = (e)=>{
        e.preventDefault();
        signup(user)
    }
    return(
        <>
            <div className={style.signup}>
                <form onSubmit={handleSignup}>
                    <input onChange={(e)=> setUser({...user,name:e.target.value})} type="text" placeholder="name" />
                    <input onChange={(e)=> setUser({...user,lastname:e.target.value})} type="text" placeholder="lastname" />
                    <input onChange={(e)=> setUser({...user,email:e.target.value})} type="email" placeholder="email" />
                    <input onChange={(e)=> setUser({...user,password:e.target.value})} type="password" placeholder="password" />
                    <button>Registrati</button>
                </form>
                <h3>Torna al <a href="/">Login</a> </h3>
            </div>
        </>
    )
}


export default Signup