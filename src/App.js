import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import UserContextProvider from "./Context/UserContext/UserProvider";

function App() {
  return (
    <div className={styles.App}>
      <UserContextProvider>
        <Header />
      </UserContextProvider>
       <Hero />
       <Footer/>
    </div>
  );
}

export default App;
