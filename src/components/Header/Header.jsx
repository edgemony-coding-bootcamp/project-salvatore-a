import Navbar from "../Navbar";
import styles from "./Header.module.scss";

export default function Header({ getFilter, userMovies }) {
  return (
    <div className={styles.Header}>
      <Navbar userMovies={userMovies} getFilter={getFilter} />
    </div>
  );
}
