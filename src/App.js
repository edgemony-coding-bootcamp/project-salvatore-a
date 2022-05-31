import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ModalPlay from './components/ModalPlay/ModalPlay';
import ModalDetails from './components/ModalDetails/ModalDetails';
import SliderSection from './components/SliderSection/SliderSection';

import UserContextProvider from "./Context/UserContext/UserProvider";
import MovieContextProvider from "./Context/MovieContext/MovieProvider";
import SliderWrapper from './components/SliderWrapper';
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
      <Hero toggleModal={toggleModal} />
      <ModalPlay isVisible={isVisible} toggleModal={toggleModal} />
      <MovieContextProvider>
        <SliderWrapper />
        <ModalDetails isVisible={isVisible} toggleModal={toggleModal} />
      </MovieContextProvider>
      <Footer />
    </div>
  );
}

export default App;
