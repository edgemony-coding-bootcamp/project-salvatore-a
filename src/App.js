import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';

import UserContextProvider from "./Context/UserContext/UserProvider";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
      </UserContextProvider>
       <Hero />
    </div>
  );
}

export default App;
