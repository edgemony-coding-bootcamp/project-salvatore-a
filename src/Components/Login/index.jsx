import React, { useState } from "react";
import { signIn } from "../../libs/firebaseAuth";
import style from "./Login.module.scss";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({});
    
  const handleLogin =(e) => {
    e.preventDefault();    
    signIn(user, true, dispatch);
  };

  return (
    <div className={style.wrapper_login}>
      <div className={style.login}>
        <h1> Benvenuto</h1>
        <form onSubmit={handleLogin}>
        <div className={style.wrapper_email}>
            <label> Email </label>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="email"
            />
        </div>
        <div className={style.wrapper_password}>
          <label> Password </label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="password"
          />
        </div>
          <button>Accedi</button>
        </form>
        <p>
          Non hai un account ? <a href="/signup">Registrati</a>{" "}
        </p>
        <button>Esci</button>
        
      </div>
    </div>
  );
};

export default Login;
