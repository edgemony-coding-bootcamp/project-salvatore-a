import styles from "./Navbar.module.scss";
import logo from "./../../logo.png";
import {FaSearch} from "react-icons/fa"
import {IoMdNotifications} from "react-icons/io"

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <img className={styles.Navbar__Logo} src={logo} alt="Edgeflix" />
      <div className={styles.Navbar__IconsWrapper}>
        <FaSearch/>
        <IoMdNotifications/>
      </div>
    </div>
  );
};
