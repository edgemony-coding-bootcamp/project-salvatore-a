import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header";
import Hero from "./../../components/Hero";
import ModalDetails from "./../../components/ModalDetails/ModalDetails";
import SliderWrapper from "./../../components/SliderWrapper";
import ModalPlay from "./../../components/ModalPlay/ModalPlay";
import SearchInput from "./../../components/SearchInput/SearchInput";
import NoResultsAlert from "./../../components/NoResultsAlert";

import { MdPlayCircleOutline } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsSkipBackwardFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import { useMovieContext } from "../../Context/MovieContext/MovieProvider";

import styles from "./Homepage.module.scss";
import { useUserContext } from "../../Context/UserContext/UserProvider";
import { UseGlobalContext } from "../../Context/globalContext";

export default function Homepage() {
  const {
    state: {
      render,
      filter,
      modalInfos: { visibility },
      screenWidth,
    },
    dispatch,
  } = UseGlobalContext();

  const { fetchAllMovies } = useMovieContext();
  const { movies, error } = useMovieContext();
  const { fetchAllUsers } = useUserContext();

  const actualUserID = localStorage.getItem("currentUser");
  const actualUser = useUserContext().users.filter(
    (user) => user.id === parseInt(actualUserID)
  )[0];

  const token = localStorage.getItem("JWT_accessToken");

  const [actualUserPlan, setActualUserPlan] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    actualUser?.accessPlan && setActualUserPlan(actualUser.accessPlan);
    actualUserID === "admin" && setActualUserPlan(actualUserID);
    //eslint-disable-next-line
  });

  const getMovieList = (userPlan) => {
    localStorage.setItem("customUser", true);
    switch (userPlan) {
      case "admin":
      case "Premium":
        return movies;
      case "Basic":
        return movies.filter((movie, index) => index % 2 === 0);
      default:
        return [];
    }
  };

  const userMovies = actualUserPlan
    ? getMovieList(actualUserPlan)
    : movies.filter(
        (movie) =>
          movie.users.filter((id) => id === parseInt(actualUserID)).length > 0
      );

  // dispatch({type: "setUserMovies", payload: actualUserPlan
  // ? getMovieList(actualUserPlan)
  // : movies.filter(
  //     (movie) =>
  //       movie.users.filter((id) => id === parseInt(actualUserID)).length > 0
  //   )})

  const filteredArray = userMovies.filter(
    (el) =>
      el.title.toLowerCase().includes(filter.filter.toLowerCase()) ||
      el.cast.join(" ").toLowerCase().includes(filter.filter.toLowerCase()) ||
      el.genres.join(" ").toLowerCase().includes(filter.filter.toLowerCase())
  );

  const toggleDetailsModal = (datas = {}) => {
    dispatch({
      type: "modalInfos",
      payload: {
        visibility: !visibility,
        datas: datas,
      },
    });
  };

  const togglePlayModal = () => {
    dispatch({ type: "setIsVisible" });
  };

  useEffect(() => {
    fetchAllMovies(token, actualUserID === "admin");

    if (error) {
      alert(error);
      setTimeout(() => {
        localStorage.removeItem("JWT_accessToken");
        localStorage.removeItem("currentUser");
      }, 5000);
    }

    fetchAllUsers().then(() => setActualUserPlan(actualUser?.accessPlan));

    //eslint-disable-next-line
  }, [render, token]);

  useEffect(() => {
    function handleResize() {
      dispatch({ type: "setScreenWidth", payload: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className={styles.Homepage}>
      <ModalDetails
        toggleModal={toggleDetailsModal}
        togglePlayModal={togglePlayModal}
      />
      <ModalPlay toggleModal={togglePlayModal} />
      {screenWidth < 700 && filter.isOnFocus ? (
        <div className={styles.Homepage__MobileSearch}>
          <div className={styles.Homepage__MobileSearch__Header}>
            <span
              className={styles.Homepage__MobileSearch__CloseBtn}
              onClick={() =>
                dispatch({
                  type: "setFilter",
                  payload: { filter: "", isOnFocus: false },
                })
              }
            >
              <AiOutlineArrowLeft />
            </span>
            <SearchInput onFocus={filter.isOnFocus} />
          </div>
          {filteredArray.length ? (
            <>
              <div className={styles.Homepage__MobileSearch__MoviesWrapper}>
                <h1>Ecco i risultati della tua ricerca:</h1>
                <p>
                  Hai cercato <i> {filter.filter} </i>{" "}
                </p>
                {filteredArray.map((el) => (
                  <div key={el.id}>
                    <div
                      className={
                        styles.Homepage__MobileSearch__MoviesWrapper__Section
                      }
                      key={el.id}
                      onClick={() => toggleDetailsModal(el)}
                    >
                      <img src={el.poster} alt={el.title} key={el.id}></img>
                      <p>{el.title}</p>
                    </div>
                    <MdPlayCircleOutline onClick={() => togglePlayModal()} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <NoResultsAlert filter={filter.filter} />
          )}
        </div>
      ) : (
        <>
          <Header userMovies={userMovies} />
          {!filter.filter ? (
            <>
              <Hero
                toggleModal={togglePlayModal}
                toggleDetailsModal={toggleDetailsModal}
                movieData={movies[0]}
              />

              <SliderWrapper
                userMovies={userMovies}
                toggleModal={toggleDetailsModal}
              />
            </>
          ) : (
            <div className={styles.Homepage__FilteredFilmWrapper}>
              {filteredArray.length ? (
                <>
                  <h1>Ecco i risultati della tua ricerca:</h1>
                  <p>
                    Hai cercato <i> {filter.filter} </i>{" "}
                  </p>
                  <div
                    className={styles.Homepage__BackBtn}
                    onClick={() =>
                      dispatch({
                        type: "setFilter",
                        payload: { filter: "", isOnFocus: false },
                      })
                    }
                  >
                    <BsSkipBackwardFill />
                    Torna Indietro
                  </div>
                  {filteredArray.map((el) => (
                    <img
                      onClick={() => toggleDetailsModal(el)}
                      key={el.id}
                      src={el.poster}
                      alt={el.title}
                    ></img>
                  ))}
                </>
              ) : (
                <NoResultsAlert filter={filter.filter} />
              )}
            </div>
          )}
          <Footer />
        </>
      )}
    </div>
  );
}
