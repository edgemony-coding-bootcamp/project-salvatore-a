import "./App.scss";
import Header from "./components/Header";
import UserContextProvider from "./Context/UserContext/UserProvider";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
      </UserContextProvider>
    </div>
  );
}

export default App;
