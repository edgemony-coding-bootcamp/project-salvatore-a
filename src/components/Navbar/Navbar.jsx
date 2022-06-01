import styles from "./Navbar.module.scss";
import logo from "./../../logo.png";
import UsersMenu from "./../UsersMenu";

import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

import { useEffect, useState, useRef } from "react";

export default function Navbar({ getFilter }) {
  const searchInput = useRef();

  const searchElements = () => {
    setSearchClass((prev) => !prev);
    searchInput.current.focus();
  };

  const [searchClass, setSearchClass] = useState(false);
  const [filter, setFilter] = useState("");

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
        <div
          onMouseLeave={() => {
            return searchClass ? setSearchClass(false) : null;
          }}
          className={styles.Navbar__IconsWrapper__SearchGroup}
        >
          <input
            autoFocus={true}
            className={
              searchClass
                ? styles.Navbar__IconsWrapper__SearchGroup__showInput
                : ""
            }
            type="text"
            ref={searchInput}
            placeholder="Titoli, persone, generi"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              getFilter(e.target.value);
            }}
          />
          <span
            onClick={() => searchElements()}
            className={
              searchClass
                ? styles.Navbar__IconsWrapper__SearchGroup__moveBtn
                : ""
            }
          >
            <FaSearch />
          </span>
        </div>
        <IoMdNotifications className={styles.Navbar__IconsWrapper__Notify} />
        <UsersMenu/>
      </div>
    </div>
  );
}
