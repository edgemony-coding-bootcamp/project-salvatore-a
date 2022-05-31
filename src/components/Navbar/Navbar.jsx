import styles from "./Navbar.module.scss";
import logo from "./../../logo.png";

import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";

import { useUserContext } from "../../Context/UserContext/UserProvider";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { fetchAllUsers, users } = useUserContext();

  const icons = [
    "https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVXPTTvsd2xi4o0OCh5RuMYTUnlwAERLP5RIoMCObB6-Tp23ADj_dcd00pV2p0Gh8UjHBdIfXzm9I1zWuViessUtvBapy3_hWJAO.png?r=e59",
    "https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVgz74RE1Vv5f4MSaEzKsJNRB4v0Xg3BDpf9M08Xl-FnW2rGdNDQbknddTs4cPsmaimT_7w_xvDmUakcVJVM6y3xSg-X3XBWwW53.png?r=f80",
    "https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbEpsFiYWCUEB6_95Mf5IggdpqegCC_zRIn-zI6GYFN94vp5_tX9qNfNOFwNb6LH4Tng7ENAwvNxJ-_I2gePe-sdPO0E7k1FLUXF.png?r=9cc",
    "https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWbBDxHBii4kJ-J6A29-cKvhLPlsTDLbzNDVdXftJo16-oIKJ9OVVLP8zqUV1oJPFOAjLMegxfPK8KEmJjyDP_Ysow38gR_yzvrb.png?r=358",
    "https://occ-0-3092-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVYlqs0gdvmIiy4URfqxfTn-g7wXStJI2Dk7LolX7UViiQxcrcudQcz-nYfcj1cwUS_uZxRnvwAO-5SHe-OeLuFL3QceVPv1N21t.png?r=552",
  ];

  useEffect(() => {
    fetchAllUsers();
    //eslint-disable-next-line
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchClass, setSearchClass] = useState(false);

  const getOnlyName = (text) => {
    const textToArray = text.split("");
    textToArray.splice(textToArray.findIndex((char) => char === "@"));
    return textToArray[0].toUpperCase() + textToArray.slice(1).join("");
  };

  return (
    <div className={styles.Navbar}>
      <img className={styles.Navbar__Logo} src={logo} alt="Edgeflix" />
      <div className={styles.Navbar__IconsWrapper}>
        <div onMouseLeave={()=>{setSearchClass(prev=>!prev)}} className={styles.Navbar__IconsWrapper__SearchGroup}>
          <input
            className={
              searchClass
                ? styles.Navbar__IconsWrapper__SearchGroup__showInput
                : ""
            }
            type="text"
            placeholder="Titoli, persone, generi"
          />
          <span
            onClick={() => setSearchClass((prev) => !prev)}
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
        <div
          className={styles.Navbar__IconsWrapper__User}
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
              className={styles.Navbar__UserMenu}
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
            >
              <ul>
                {users &&
                  users
                    .filter((user) => user.id !== 0)
                    .map((user, index) => (
                      <li key={user.id}>
                        <img
                          className={styles.Navbar__UserMenu__UserIcon}
                          src={icons[index]}
                          alt={`${getOnlyName(user.email)} icon`}
                        />
                        {getOnlyName(user.email)}
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
                <li className={styles.Navbar__UserMenu__Exit}>
                  Esci da Edgeflix
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
