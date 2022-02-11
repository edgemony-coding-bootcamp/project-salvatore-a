import style from "./Searchbar.module.scss";
import React, { useState } from "react";

export const Searchbar = () => {
  const [text, setText] = useState("");

  const search = (e) => setText(e.target.value);

  return (
    <div className={style.searchbar}>
      <input type="text" value={text} onChange={search} />
    </div>
  );
};
