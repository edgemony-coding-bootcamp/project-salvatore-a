import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signIn } from "../../libs/firebaseAuth";
import style from "../../libs/Form.module.scss";
import { useDispatch } from "react-redux";

import Banner from "../../Components/Banner";

const Login = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [banner, setBanner] = useState(false);
    
  const handleLogin =(e) => {
    e.preventDefault();
    setBanner(false)
    signIn(user,dispatch, setBanner);
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
              placeholder="email@example.it"
              required
            />
        </div>
        <div className={style.wrapper_item}>
          <label> Password: </label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="******"
            required
          />
        </div>
          <button>Accedi</button>
          {banner && <Banner value="red"/>}
        </form>
        <p>
          Non hai un account ? <Link to="/signup">Registrati</Link>{" "}
        </p>
        
        
      </div>
    </div>
  );
};

export default Login;
