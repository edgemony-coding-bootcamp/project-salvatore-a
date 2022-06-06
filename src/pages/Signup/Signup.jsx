import AccessForm from "../../components/AccessForm";
import Overlay from "../../components/Overlay";

import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";
import logo from "./../../logo.png";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className={styles.Signup}>
      <img className={styles.Signup__Logo} onClick={() => navigate("/signin")} src={logo} alt="Edgeflix" />

      <h1>Signup</h1>
      <Overlay />
      <AccessForm endPoint="users"/>

      <small className={styles.Signup__redirect}>
        Sei già registrato? <Link to="/signin">Sign In!</Link>
      </small>
    </div>
  );
}
