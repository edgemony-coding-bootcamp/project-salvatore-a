import style from "./Searchbar.module.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { SearchResults } from "../SearchResults";

export const Searchbar = () => {
  const [input, setInput] = useState("");
  const groups = useSelector(state => state.groups.map((group) => group.messages))
  const [searchResults, setSearchResult] = useState()
  const users = useSelector(state => state.users)

  const [hidden, setHidden] = useState(false)

  const search = (e) => {
    setInput(e.target.value);
    setHidden(false)
    const aa = []
    groups.map((messages) => aa.push(...messages))
    aa.map((message) => users.map((user) => {
      if (message.author === user.id) {
        message.name = user.name
        message.lastname = user.lastname
        message.photo = user.photo
      }
      return message
    }))
    setSearchResult(aa.filter((message) =>
      message.text.toLowerCase().includes(input.toLowerCase()) || message.name.toLowerCase().includes(input.toLowerCase())))
  }

  return (
    <div className={style.searchbar}>
      <label className={style.label} for="inputSearchbar">Cerca qui</label>
      <input type="text" value={input} onChange={search}  name="inputSearchbar"/>
      <h3 className={hidden === true ? style.hideResult : null} onClick={() => {setHidden(true);setInput('')}}>X</h3>
      {searchResults && <div className={`${style.searched} ${hidden === true && style.hideResult}`}>

        {searchResults.map((text, index) => (
          <SearchResults setHidden={setHidden} setInput={setInput} key={index} text={text} user={text} />
        ))}
      </div>}
    </div>
  );
};

