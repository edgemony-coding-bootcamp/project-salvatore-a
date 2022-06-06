import AccessForm from "../../components/AccessForm";
import Overlay from "../../components/Overlay";

import styles from "./Signin.module.scss";
import logo from "./../../logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  
  const rapidAccess = () => {
    localStorage.setItem("currentUser", "admin");
    navigate("/browse");
  }

  return (
    <div className={styles.Signin}>
      <img src={logo} alt="Edgeflix" />
      <Overlay />
      <h1>Sign In</h1>
      <AccessForm endPoint="login" />
      <small className={styles.Signin__redirect}>
        Non sei ancora registrato? <Link to="/signup">Sign Up!</Link>
      </small>
      <button onClick={()=>rapidAccess()} className={styles.Signin__RapidAccess}>Accesso rapido</button>
    </div>
  );
}
