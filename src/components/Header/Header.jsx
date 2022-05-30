import Navbar from "../Navbar";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.Header}>
      <Navbar />
    </div>
  );
}
