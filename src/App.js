import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ModalDetails from "./components/ModalDetails/ModalDetails";

import SliderWrapper from "./components/SliderWrapper";
import ModalPlay from "./components/ModalPlay/ModalPlay";

import UserContextProvider from "./Context/UserContext/UserProvider";
import MovieContextProvider from "./Context/MovieContext/MovieProvider";

import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [modalInfos, setModalInfos] = useState({
    visibility: false,
    datas: {}
  });
  const [isVisible, setVisible] = useState(false);

  const toggleDetailsModal = (datas = {}) => {
    setModalInfos({
      visibility: !modalInfos.visibility,
      datas: datas
    });
  };

  const togglePlayModal = () => {
    setVisible(!isVisible);
  }

  return (
    <div className={styles.App}>
      <UserContextProvider>
        <Header />
      </UserContextProvider>

      <MovieContextProvider>
        <Hero toggleModal={togglePlayModal} />
        <ModalPlay isVisible={isVisible} toggleModal={togglePlayModal} />
        <SliderWrapper toggleModal={toggleDetailsModal} />
        <ModalDetails isVisible={modalInfos.visibility} movieData={modalInfos.datas} toggleModal={toggleDetailsModal} />
      </MovieContextProvider>
      <Footer />
    </div>
  );
}



export default App;
