import { FaSearch } from "react-icons/fa";

import { useRef, useState } from "react";
import styles from "./SearchInput.module.scss";

export default function SearchInput({ getFilter, onFocus }) {
  const [searchClass, setSearchClass] = useState(false);
  const [filter, setFilter] = useState("");
  const searchInput = useRef();

  const searchElements = () => {
    setSearchClass((prev) => !prev);
    searchInput.current.focus();
    getFilter("", true);

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
            getFilter(e.target.value, true);
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
