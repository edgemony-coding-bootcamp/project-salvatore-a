import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ModalDetails from "./components/ModalDetails/ModalDetails";

import SliderWrapper from "./components/SliderWrapper";
import ModalPlay from "./components/ModalPlay/ModalPlay";

import UserContextProvider from "./Context/UserContext/UserProvider";
import { useMovieContext } from "./Context/MovieContext/MovieProvider";

import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [modalInfos, setModalInfos] = useState({
    visibility: false,
    datas: {},
  });
  const [isVisible, setVisible] = useState(false);
  const [filter, setFilter] = useState("");
  const { movies } = useMovieContext();
  const filteredArray = movies.filter(
    (el) =>
      el.title.toLowerCase().includes(filter.toLowerCase()) ||
      el.cast.join(" ").toLowerCase().includes(filter.toLowerCase()) ||
      el.genres.join(" ").toLowerCase().includes(filter.toLowerCase())
  );

  const toggleDetailsModal = (datas = {}) => {
    setModalInfos({
      visibility: !modalInfos.visibility,
      datas: datas,
    });
  };

  const getFilter = (filter) => {
    setFilter(filter);
  };

  const togglePlayModal = () => {
    setVisible(!isVisible);
  };

  return (
    <div className={styles.App}>
      <UserContextProvider>
        <Header getFilter={getFilter} />
      </UserContextProvider>
      {!filter ? (
        <>
          <Hero toggleModal={togglePlayModal} />
          <ModalPlay isVisible={isVisible} toggleModal={togglePlayModal} />
          <SliderWrapper toggleModal={toggleDetailsModal} />
          <ModalDetails
            isVisible={modalInfos.visibility}
            movieData={modalInfos.datas}
            toggleModal={toggleDetailsModal}
          />
        </>
      ) : (
        <div className={styles.App__FilteredFilmWrapper}>
          {filteredArray.length ? (
            <>
              <h1>Ecco i risultati della tua ricerca:</h1>
              {filteredArray.map((el) => (
                <img src={el.poster} alt={el.title} key={el.id}></img>
              ))}
            </>
          ) : (
            <div className={styles.App__noResultsAlert}>
              <p>
                Nessun risultato per la tua ricerca di <i>{filter}</i>.
                <br />
                Suggerimenti:
              </p>
              <ul>
                <li>Prova con parole chiave diverse</li>
                <li>Cerchi un film o una serie TV?</li>
                <li>
                  Prova a usare il titolo di un film o programma TV oppure il
                  nome di un attore
                </li>
                <li>
                  Prova con un genere, per esempio Commedia,Romantici, Sport o
                  Dramma
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
