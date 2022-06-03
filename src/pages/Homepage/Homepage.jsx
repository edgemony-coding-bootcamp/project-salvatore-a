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

import UserContextProvider from "./../../Context/UserContext/UserProvider";

import styles from "./Homepage.module.scss";
import { useEffect, useState } from "react";
import {useMovieContext} from "../../Context/MovieContext/MovieProvider";

export default function Homepage() {
  const [render, setRender] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [modalInfos, setModalInfos] = useState({
    visibility: false,
    datas: {},
  });
  const { fetchAllMovies } = useMovieContext();
  const [isVisible, setVisible] = useState(false);
  const [filter, setFilter] = useState({ filter: "", isOnFocus: false });
  const { movies } = useMovieContext();
  const filteredArray = movies.filter(
    (el) =>
      el.title.toLowerCase().includes(filter.filter.toLowerCase()) ||
      el.cast.join(" ").toLowerCase().includes(filter.filter.toLowerCase()) ||
      el.genres.join(" ").toLowerCase().includes(filter.filter.toLowerCase())
  );

  const toggleDetailsModal = (datas = {}) => {
    setModalInfos({
      visibility: !modalInfos.visibility,
      datas: datas,
    });
  };

  const getFilter = (input = "", isOnFocus = false) => {
    setFilter({ filter: input, isOnFocus: isOnFocus });
  };

  const togglePlayModal = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    fetchAllMovies();
    //eslint-disable-next-line
  }, [render]);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <ModalDetails
        isVisible={modalInfos.visibility}
        movieData={modalInfos.datas}
        toggleModal={toggleDetailsModal}
        togglePlayModal={togglePlayModal}
        setRender={setRender}
        render={render}
      />
      <ModalPlay isVisible={isVisible} toggleModal={togglePlayModal} />
      {screenWidth < 700 && filter.isOnFocus ? (
        <div className={styles.App__MobileSearch}>
          <div className={styles.App__MobileSearch__Header}>
            <span
              className={styles.App__MobileSearch__CloseBtn}
              onClick={() => getFilter("", false)}
            >
              <AiOutlineArrowLeft />
            </span>
            <SearchInput onFocus={filter.isOnFocus} getFilter={getFilter} />
          </div>
          {filteredArray.length ? (
            <>
              <div className={styles.App__MobileSearch__MoviesWrapper}>
                <h1>Ecco i risultati della tua ricerca:</h1>
                <p>
                  Hai cercato <i> {filter.filter} </i>{" "}
                </p>
                {filteredArray.map((el) => (
                  <div>
                    <div
                      className={
                        styles.App__MobileSearch__MoviesWrapper__Section
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
          <UserContextProvider>
            <Header getFilter={getFilter} />
          </UserContextProvider>
          {!filter.filter ? (
            <>
              <Hero
                toggleModal={togglePlayModal}
                toggleDetailsModal={toggleDetailsModal}
                movieData={movies[0]}
              />

              <SliderWrapper toggleModal={toggleDetailsModal} />
            </>
          ) : (
            <div className={styles.App__FilteredFilmWrapper}>
              {filteredArray.length ? (
                <>
                  <h1>Ecco i risultati della tua ricerca:</h1>
                  <p>
                    Hai cercato <i> {filter.filter} </i>{" "}
                  </p>
                  <div
                    className={styles.App__BackBtn}
                    onClick={() => setFilter({ filter: "", isOnFocus: false })}
                  >
                    <BsSkipBackwardFill />
                    Torna Indietro
                  </div>
                  {filteredArray.map((el) => (
                    <img key={el.id} src={el.poster} alt={el.title}></img>
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
    </>
  );
}