import React, { useState } from "react";
import { signup } from "../../libs/firebaseAuth";

import style from "../../libs/Form.module.scss";



const Signup = () => {
    const [user,setUser] = useState({})

    const handleSignup = (e)=>{
        e.preventDefault();
        signup(user)
    }
    return(
        <>
        <div className={style.wrapper}>
            <div className={style.wrapper_form}>
                <form onSubmit={handleSignup}>
                    <h2> Registrazione </h2>
                    <div className={style.wrapper_item}>
                        <label> Nome </label>
                        <input onChange={(e)=> setUser({...user,name:e.target.value})} type="text" placeholder="name" />
                    </div>

                    <div className={style.wrapper_item}>
                        <label> Cognome </label>
                        <input onChange={(e)=> setUser({...user,lastname:e.target.value})} type="text" placeholder="lastname" />
                    </div>
                    
                    <div className={style.wrapper_item}>
                        <label> E-mail </label>
                        <input onChange={(e)=> setUser({...user,email:e.target.value})} type="email" placeholder="email" />
                    </div>
            
                    <div className={style.wrapper_item}>
                        <label> Password </label>
                        <input onChange={(e)=> setUser({...user,password:e.target.value})} type="password" placeholder="password" />
                    </div>
                    
                    <button>Registrati</button>
                </form>
                <p>Torna al <a href="/">Login</a> </p>
            </div>
            </div>
        
        </>
    )
}


export default Signup