import styles from "./ModalDetails.module.scss";
import Rating from "./../Rating/Rating";

import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdAddCircleOutline, MdPlayCircleOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { useMovieContext } from "./../../Context/MovieContext/MovieProvider";
import Overlay from "../Overlay";

export default function ModalDetails({
  isVisible,
  movieData,
  toggleModal,
  togglePlayModal,
  setRender,
}) {
  const addToFavourite = useMovieContext().favouriteMovie;
  const [isFavorite, setIsFavorite] = useState(movieData.favorite);
  return (
    <div>
      {isVisible && (
        <>
          <Overlay functionOnClick={toggleModal} />
          <div className={styles.ModalContainer}>
            <IoIosCloseCircleOutline
              onClick={() => toggleModal()}
              className={styles.ModalContainer__BtnClose}
            />

            <img
              className={styles.ModalContainer__Poster}
              src={movieData.poster}
              alt={movieData.title}
            />

            <div className={styles.ModalData}>
              <Rating movieData={movieData} setRender={setRender} />
              <h1 className={styles.ModalData__Title}>{movieData.title}</h1>
              <h3 className={styles.ModalData__Season}>
                {" "}
                Stagioni: {movieData.seasons}{" "}
              </h3>
              <h3 className={styles.ModalData__Desc}>
                {movieData.description}
              </h3>
              <h4 className={styles.ModalData__Cast}>
                {" "}
                Genere: {movieData.genres.join(", ")}
              </h4>
              <h4 className={styles.ModalData__Cast}>
                {" "}
                Cast:{movieData.cast.join(", ")}
              </h4>
              {isFavorite ? (
                <FiMinusCircle
                  className={styles.ModalData__BtnCir}
                  onClick={() => {
                    addToFavourite(movieData.id, !isFavorite).then(() => {
                      setRender((prev) => !prev);
                      setIsFavorite(!isFavorite);
                    });
                  }}
                />
              ) : (
                <MdAddCircleOutline
                  onClick={() => {
                    addToFavourite(movieData.id, !isFavorite).then(() => {
                      setRender((prev) => !prev);
                      setIsFavorite(!isFavorite);
                    });
                  }}
                  className={styles.ModalData__BtnCir}
                />
              )}
              <MdPlayCircleOutline
                onClick={() => togglePlayModal()}
                className={styles.ModalData__BtnCir}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
