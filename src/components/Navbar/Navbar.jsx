import styles from "./Navbar.module.scss";
import logo from "./../../logo.png";
import UsersMenu from "./../UsersMenu";

import { IoMdNotifications } from "react-icons/io";

import { useEffect, useState } from "react";
import SearchInput from "../SearchInput/SearchInput";

export default function Navbar({ getFilter }) {

  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgb(20, 20, 20)")
      : setnavColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className={styles.Navbar}
      style={{ backgroundColor: navColor, transition: "all 1s" }}
    >
      <img className={styles.Navbar__Logo} src={logo} alt="Edgeflix" />

      <div className={styles.Navbar__IconsWrapper}>
        <SearchInput getFilter={getFilter}/>
        <IoMdNotifications className={styles.Navbar__IconsWrapper__Notify} />
        <UsersMenu />
      </div>
    </div>
  );
}
