import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import UserContextProvider from "./Context/UserContext/UserProvider";
import MovieContextProvider from "./Context/MovieContext/MovieProvider";
import SliderWrapper from "./components/SliderWrapper";
import ModalPlay from './components/ModalPlay/ModalPlay';

import UserContextProvider from "./Context/UserContext/UserProvider";
import MovieContextProvider from "./Context/MovieContext/MovieProvider";
import { useState } from 'react';

function App() {
  const [isVisible, setVisible] = useState(false)

  const toggleModal = () => {
    setVisible(!isVisible)
  }
  return (

    <div className={styles.App}>
      <UserContextProvider>
        <Header />
      </UserContextProvider>

      <MovieContextProvider>
        <Hero toggleModal={toggleModal} />
        <ModalPlay isVisible={isVisible} toggleModal={toggleModal} />
        <MovieContextProvider>
        <SliderWrapper />
        </MovieContextProvider>
      <Footer />
    </div>
  );
}

export default App;
