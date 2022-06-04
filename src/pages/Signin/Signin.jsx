import AccessForm from "../../components/AccessForm";
import Overlay from "../../components/Overlay";

import styles from "./Signin.module.scss";
import logo from "./../../logo.png";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className={styles.Signin}>
      <img src={logo} alt="Edgeflix" />
      <Overlay />
      <h1>Sign In</h1>
      <AccessForm formType={"signin"} />
      <small className={styles.Signin__redirect}>
        Non sei ancora registrato? <Link to="/signup">Sign Up!</Link>
      </small>
    </div>
  );
}
