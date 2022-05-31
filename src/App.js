import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import SliderWrapper from "./components/SliderWrapper";
import ModalPlay from "./components/ModalPlay/ModalPlay";

import UserContextProvider from "./Context/UserContext/UserProvider";
import MovieContextProvider from "./Context/MovieContext/MovieProvider";
import { useState } from "react";

function App() {
  const [modalInfos, setModalInfos] = useState({
    visibility: false,
    datas: []
  });

  const toggleModal = (datas = []) => {
    setModalInfos({
      visibility: !modalInfos.visibility,
      datas: datas
    });
  };

  return (
    <div className={styles.App}>
      <UserContextProvider>
        <Header />
      </UserContextProvider>

      <MovieContextProvider>
        <Hero toggleModal={toggleModal} />
        <ModalPlay isVisible={modalInfos.visibility} toggleModal={toggleModal} />
        <SliderWrapper />
      </MovieContextProvider>
      <Footer />
    </div>
  );
}

export default App;
