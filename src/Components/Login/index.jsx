import React, { useState } from "react";
import { signIn } from "../../libs/firebaseAuth";
import style from "../../libs/Form.module.scss";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({});
    
  const handleLogin =(e) => {
    e.preventDefault();    
    signIn(user, true, dispatch);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_form}>
        <h2> Benvenuto</h2>
        <form onSubmit={handleLogin}>
        <div className={style.wrapper_item}>
            <label> Email: </label>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="email"
              required
            />
        </div>
        <div className={style.wrapper_item}>
          <label> Password: </label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="password"
            required
          />
        </div>
          <button>Accedi</button>
        </form>
        <p>
          Non hai un account ? <a href="/signup">Registrati</a>{" "}
        </p>
        
        
      </div>
    </div>
  );
};

export default Login;
