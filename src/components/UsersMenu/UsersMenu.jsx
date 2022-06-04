import { MdArrowDropDown } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useUserContext } from "../../Context/UserContext/UserProvider";
import styles from "./UsersMenu.module.scss";
import { useNavigate } from "react-router-dom";

export default function UsersMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { fetchAllUsers } = useUserContext();

  const actualUserID = localStorage.getItem("currentUser");

  const [actualUser] = useUserContext().users.filter(
    (user) => user.id === parseInt(actualUserID)
  );

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers();
    //eslint-disable-next-line
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("JWT_accessToken");
    navigate("/signin");
  };

  return (
    <div
      className={styles.UsersMenu}
      onMouseOver={() => {
        setMenuOpen(true);
      }}
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      {actualUser && (
        <img
          alt={actualUser.username || "Anonimo"}
          src={
            actualUser.avatar ||
            "https://cdn-icons-png.flaticon.com/512/843/843331.png?w=740"
          }
        ></img>
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
            {actualUser && (
              <li key={actualUser?.id}>
                <img
                  className={styles.UsersMenu__DropdownMenu__UserIcon}
                  src={
                    actualUser?.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/843/843331.png?w=740"
                  }
                  alt={actualUser?.username || "Anonimo"}
                />
                {actualUser?.username || "Anonimo"}
              </li>
            )}

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
  );
}
