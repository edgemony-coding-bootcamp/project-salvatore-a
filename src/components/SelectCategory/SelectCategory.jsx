import { useState } from "react";

import styles from "./SelectCategory.module.scss";
import { MdArrowDropDown } from "react-icons/md";

export default function SelectCategory({ getFilter, userMovies }) {
  const getCategories = (movies) => {
    let catArray = [];
    userMovies.forEach((el) => {
      for (const genre of el.genres) {
        if (catArray.indexOf(genre) === -1) catArray.push(genre);
      }
    });
    return catArray;
  };

  const [CategoryMenuVisibility, setCategoryMenuVisibility] = useState(false);

  return (
    <div className={styles.SelectCategory}>
      <div
        onClick={() => setCategoryMenuVisibility((prev) => !prev)}
        className={styles.SelectCategory__MenuTitle}
      >
        <span> Categorie</span>
        <MdArrowDropDown />
      </div>
      {CategoryMenuVisibility && (
        <div className={styles.SelectCategory__CategoriesWrapper}>
          <ul>
            {getCategories(userMovies).map((selectedGenre, index) => (
              <li
                key={index}
                onClick={(e) => {
                  getFilter(selectedGenre);
                  setCategoryMenuVisibility(false);
                }}
              >
                {selectedGenre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
