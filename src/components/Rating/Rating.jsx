import { useState, useEffect } from "react";
import { useMovieContext } from "./../../Context/MovieContext/MovieProvider";
import { UseGlobalContext } from "../../Context/globalContext";

import { AiFillStar } from "react-icons/ai";
import styles from "./Rating.module.scss";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const addRating = useMovieContext().movieRating;

  const { state : {modalInfos : {datas}}, dispatch } = UseGlobalContext();

  useEffect(() => {
    if (datas) {
      setRating(datas.rating);
    }
    //eslint-disable-next-line
  }, [datas]);

  return (
    <>
      {datas && (
        <div className={styles.Rating}>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={
                  index <= rating ? styles.Rating__On : styles.Rating__Off
                }
                onClick={() => {
                  datas &&
                    addRating(datas.id, index).then(() => {
                      dispatch({ type: "setRender" });
                      setRating(index);
                    });
                }}
              >
                <span className={styles.Rating__Span}>
                  <AiFillStar className={styles.Rating__Star} />
                </span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
