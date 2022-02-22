import React, { useState } from "react";


import { signIn } from "../../libs/firebaseAuth";
import style from "./Login.module.scss";
import { useDispatch } from "react-redux";


import Carousel from "../../Components/Carousel";
import logo from "../../img/logo256.png";
import Signup from "../../Components/Sign-up";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [banner, setBanner] = useState(false);
  const [switchPage, setSwitchPage] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setBanner(false);
    signIn(user, dispatch, setBanner);
  };
  
  function handleSwitch(param){
    setSwitchPage(param)
  }
  return (
    <div className={style.main_wrapper}>
      <Carousel  />
      <div className={`${style.wrapper_form} ${switchPage && style.switch}`}>
        <div className={style.head}>
          <img src={logo} alt="logo" loading="lazy"/>
          <h1> Slack-Clone</h1>
        </div>
        <div className={style.wrapper_reg}>
          <Signup setter={handleSwitch}/>
        </div>
        <div className={style.wrapper_login}>
          <form onSubmit={handleLogin}>
            {banner && <h5>Email o Password Errati</h5>}
            <div className={style.wrapper_item}>
              <label> Email: </label>
              <input
                className={ banner ? style.error : null}
                
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                placeholder="email@example.it"
                required
              />
            </div>
            <div className={style.wrapper_item}>
              <label> Password: </label>
              <input
                className={banner ? style.error : null}
                
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="******"
                required
              />
            </div>
            <button>Accedi</button>
            
          </form>
          <p onClick={() => handleSwitch(true)}>
            Non hai un account ?Registrati!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
