import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import UserContextProvider from "./Context/UserContext/UserProvider";

function App() {
  return (
    <div className="App">
      <Header/>
      <UserContextProvider>
        <Header />
      </UserContextProvider>
       <Hero />
       <Footer/>
    </div>
  );
}

export default App;
