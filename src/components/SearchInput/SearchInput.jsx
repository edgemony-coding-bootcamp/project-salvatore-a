import { FaSearch } from "react-icons/fa";

import { useRef, useState } from "react";
import styles from "./SearchInput.module.scss";
import {UseGlobalContext} from "../../Context/globalContext";

export default function SearchInput({ onFocus }) {
  const [searchClass, setSearchClass] = useState(false);
  const [filter, setFilter] = useState("");
  const searchInput = useRef();
  const {dispatch} = UseGlobalContext()

  const searchElements = () => {
    setSearchClass((prev) => !prev);
    searchInput.current.focus();
    dispatch({type: "setFilter", payload: {filter: "", onFocus: true}})
  };

  return (
    <>
      <div
        onMouseLeave={() => {
          return searchClass ? setTimeout(() => setSearchClass(false), 500) : null 
        }}
        className={styles.SearchInput}
      >
        <input
          autoFocus={true}
          className={
            searchClass
              ? styles.SearchInput__showInput
              : onFocus
              ? styles.SearchInput__display
              : ""
          }
          type="text"
          ref={searchInput}
          placeholder="Titoli, persone, generi"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            dispatch({type: "setFilter", payload: {filter: e.target.value, onFocus: true}})
          }}
        />
        <span
          onClick={() => !onFocus && searchElements()}
          className={
            searchClass
              ? styles.SearchInput__moveBtn
              : onFocus
              ? styles.SearchInput__searchBtnMobile
              : ""
          }
        >
          <FaSearch />
        </span>
      </div>
    </>
  );
}
