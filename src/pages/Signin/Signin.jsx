import AccessForm from "../../components/AccessForm";
import Overlay from "../../components/Overlay";

import { useNavigate } from "react-router-dom";

import styles from "./Signin.module.scss";
import logo from "./../../logo.png";


export default function Signin() {
  const navigate = useNavigate();
  
  return (
    <div className={styles.Signin}>
      <img onClick={()=>navigate("/project-salvatore-a")} src={logo} alt="Edgeflix" />
      <Overlay/>
      <h1>Sign In</h1>
      <AccessForm />
    </div>
  );
}
