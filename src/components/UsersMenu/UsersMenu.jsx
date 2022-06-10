import { MdArrowDropDown } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";

import { useState } from "react";
import { useUserContext } from "../../Context/UserContext/UserProvider";
import { useNavigate } from "react-router-dom";

import adminIcon from "./../../assets/adminIcon.png";
import anonymousUser from "./../../assets/anonymousUser.png";

import Overlay from "./../Overlay";

import styles from "./UsersMenu.module.scss";

export default function UsersMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const actualUserID = localStorage.getItem("currentUser");

  const [actualUser] = useUserContext().users.filter(
    (user) => user.id === parseInt(actualUserID)
  );

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("JWT_accessToken");
    localStorage.removeItem("customUser");
    navigate("/signin");
  };

  return (
    <>
      {isMenuOpen && (
        <Overlay
          visibility={false}
          functionOnClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={styles.UsersMenu}
        onMouseOver={() => (window.innerWidth > 700 ? setMenuOpen(true) : {})}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {actualUserID === "admin" ? (
          <img alt={"Admin Icon"} src={adminIcon}></img>
        ) : (
          actualUser && (
            <img
              alt={actualUser?.username || "Anonimo"}
              src={actualUser?.avatar || anonymousUser}
            ></img>
          )
        )}
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
              {actualUserID === "admin" ? (
                <li>
                  <img
                    className={styles.UsersMenu__DropdownMenu__UserIcon}
                    src={adminIcon}
                    alt={"Admin Icon"}
                  />
                  {"Admin"}
                </li>
              ) : (
                actualUser && (
                  <li key={actualUser?.id}>
                    <img
                      className={styles.UsersMenu__DropdownMenu__UserIcon}
                      src={actualUser?.avatar || anonymousUser}
                      alt={actualUser?.username || "Anonimo"}
                    />
                    {actualUser?.username || "Anonimo"}
                  </li>
                )
              )}

              {actualUser?.accessPlan && <li className={styles.UsersMenu__DropdownMenu__AccessPlan}>Piano di accesso: {actualUser.accessPlan}</li>}
              <li>
                <BsPencil /> Gestisci il profilo
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
              <li
                onClick={() => logout()}
                className={styles.UsersMenu__DropdownMenu__Exit}
              >
                Esci da Edgeflix
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
