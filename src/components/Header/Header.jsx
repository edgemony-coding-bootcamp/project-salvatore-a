import Navbar from "../Navbar";
import styles from "./Header.module.scss";

export default function Header({getFilter}) {
  return (
    <div className={styles.Header}>
      <Navbar getFilter={getFilter}/>
    </div>
  );
}
