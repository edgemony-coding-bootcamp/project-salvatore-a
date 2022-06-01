import { MdArrowDropDown } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";
import {useEffect, useState} from "react";
import {useUserContext} from "../../Context/UserContext/UserProvider";
import styles from "./UsersMenu.module.scss";

export default function UsersMenu() {
  const { fetchAllUsers, users } = useUserContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchAllUsers();
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={styles.UsersMenu}
      onMouseOver={() => {
        setMenuOpen(true);
      }}
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      <img
        alt="User Icon"
        src="https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZoA7Ad6wq_Mr6n2PeiNE7b3crY5UFBH3HZBKFEn-sNnuFYr2nFRDhXaJ-n4AffDKow6laNMiqveHP9dquslaL1U7sGHr8g.png?r=e59"
      ></img>
      <MdArrowDropDown />
      {isMenuOpen && (
        <div
          className={styles.UsersMenu__DropdownMenu}
          onMouseLeave={() => {
            return isMenuOpen
              ? setTimeout(() => setMenuOpen(false), 500)
              : null;
          }}
        >
          <ul>
            {users &&
              users
                .filter((user, index) => index > 0 && index <5)
                .map((user, index) => (
                  <li key={user.id}>
                    <img
                      className={styles.UsersMenu__DropdownMenu__UserIcon}
                      src={user.avatar}
                      alt={`${user.username} icon`}
                    />
                    {user.username}
                  </li>
                ))}
            <li>
              <BsPencil /> Gestisci i profili
            </li>
            <hr />
            <li>
              <AiOutlineUser /> Account
            </li>
            <li>
              <AiOutlineQuestionCircle />
              Centro assistenza
            </li>
            <hr />
            <li className={styles.UsersMenu__DropdownMenu__Exit}>Esci da Edgeflix</li>
          </ul>
        </div>
      )}
    </div>
  );
}
