import styles from "./Navbar.module.scss";
import logo from "./../../logo.png";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <img className={styles.Navbar__Logo} src={logo} alt="Edgeflix" />
      <div className={styles.Navbar__IconsWrapper}>
        <FaSearch />
        <IoMdNotifications className={styles.Navbar__IconsWrapper__Notify}/>
        <div className={styles.Navbar__IconsWrapper__User}>
          <img src="https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZoA7Ad6wq_Mr6n2PeiNE7b3crY5UFBH3HZBKFEn-sNnuFYr2nFRDhXaJ-n4AffDKow6laNMiqveHP9dquslaL1U7sGHr8g.png?r=e59"></img>
          <MdArrowDropDown/>
        </div>
      </div>
    </div>
  );
}
