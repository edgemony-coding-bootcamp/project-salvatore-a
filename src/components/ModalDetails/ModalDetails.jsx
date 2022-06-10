import Rating from "./../Rating/Rating";
import Overlay from "./../Overlay";

import { useEffect, useState } from "react";
import { useMovieContext } from "./../../Context/MovieContext/MovieProvider";
import { UseGlobalContext } from "../../Context/globalContext";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdAddCircleOutline, MdPlayCircleOutline } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";


import styles from "./ModalDetails.module.scss";

export default function ModalDetails({ togglePlayModal, toggleModal}) {
  const {
    state: {
      modalInfos: { visibility, datas },
    },
    dispatch,
  } = UseGlobalContext();

  const { hideMovie, favouriteMovie: addToFavourite } = useMovieContext();
  const [isFavorite, setIsFavorite] = useState(datas && datas.favorite);
  const actualUserID = localStorage.getItem("currentUser");

  useEffect(() => {
    setIsFavorite(datas && datas.favorite);
  }, [datas]);

  const hideMovieAndClose = () => {
    const movieDataCopy = datas;
    const userIndex = datas.users.findIndex(
      (user) => user === parseInt(actualUserID)
    );
    movieDataCopy.users.splice(userIndex, 1);
    hideMovie(datas.id, movieDataCopy.users);
    toggleModal();
  };

  return (
    <div>
      {visibility && (
        <>
          <Overlay functionOnClick={toggleModal} />
          <div className={styles.ModalContainer}>
            <IoIosCloseCircleOutline
              onClick={() => toggleModal()}
              className={styles.ModalContainer__BtnClose}
            />

            <img
              className={styles.ModalContainer__Poster}
              src={datas.poster}
              alt={datas.title}
            />

            <div className={styles.ModalData}>
              <Rating/>
              <h1 className={styles.ModalData__Title}>{datas.title}</h1>
              <h3 className={styles.ModalData__Season}>
                {" "}
                Stagioni: {datas.seasons}{" "}
              </h3>
              <h3 className={styles.ModalData__Desc}>{datas.description}</h3>
              <h4 className={styles.ModalData__Cast}>
                {" "}
                Genere: {datas.genres.join(", ")}
              </h4>
              <h4 className={styles.ModalData__Cast}>
                {" "}
                Cast:{datas.cast.join(", ")}
              </h4>
              {isFavorite ? (
                <FiMinusCircle
                  className={styles.ModalData__BtnCir}
                  onClick={() => {
                    addToFavourite(datas.id, !isFavorite).then(() => {
                      dispatch({ type: "setRender" });
                      setIsFavorite(!isFavorite);
                    });
                  }}
                />
              ) : (
                <MdAddCircleOutline
                  onClick={() => {
                    addToFavourite(datas.id, !isFavorite).then(() => {
                      dispatch({ type: "setRender" });
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
              <AiOutlineEyeInvisible
                onClick={() =>
                  actualUserID === "admin" ||
                  localStorage.getItem("customUser") === "true"
                    ? null
                    : hideMovieAndClose()
                }
                title={
                  actualUserID === "admin"
                    ? "Hai effettuato l'accesso come admin, dunque non puoi nascondere nulla :)"
                    : localStorage.getItem("customUser") === "true"
                    ? "Per i nuovi utenti è stato temporaneamente disabilitato questo servizio, riprova un'altra volta :)"
                    : null
                }
                className={
                  actualUserID === "admin" ||
                  localStorage.getItem("customUser") === "true"
                    ? styles.ModalData__BtnCirInactive
                    : styles.ModalData__BtnCir
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
