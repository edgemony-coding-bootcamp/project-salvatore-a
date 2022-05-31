import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import SliderWrapper from "./components/SliderWrapper";
import ModalPlay from "./components/ModalPlay/ModalPlay";

import UserContextProvider from "./Context/UserContext/UserProvider";
import { useMovieContext } from "./Context/MovieContext/MovieProvider";
import { useState } from "react";

function App() {
  const [isVisible, setVisible] = useState(false);
  const [filter, setFilter] = useState("");
  const {movies} = useMovieContext();

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  const getFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={styles.App}>
      <UserContextProvider>
        <Header getFilter={getFilter} />
      </UserContextProvider>
      {!filter ?
      <>
      <Hero toggleModal={toggleModal} />
      <ModalPlay isVisible={isVisible} toggleModal={toggleModal} />
      <SliderWrapper />
      </> : 
      <div className={styles.App__FilteredFilmWrapper}>
        {movies.filter(el=>el.title.toLowerCase().includes(filter.toLowerCase())).map(el=> <img src={el.poster} alt={el.title} key={el.id}></img>)}
      </div>
      }
      <Footer />
    </div>
  );
}

export default App;
