import Navbar from "../Navbar";
import styles from "./Header.module.scss";

export default function Header({ userMovies }) {
  return (
    <div className={styles.Header}>
      <Navbar userMovies={userMovies}/>
    </div>
  );
}
