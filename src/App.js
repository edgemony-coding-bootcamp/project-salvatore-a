import './App.scss';

function App() {
  return (
    <>
    <div className="flex-container">
      <div className="searchbar">
        <h1>searchbar</h1>
      </div>
      <div className="flexItem-chatt">
        <div className="conversations">
          <h1>Conversazioni</h1>
        </div>
        <div className="messages">
          <h2>Nome </h2>
          <ul>
            <li >
              <h3>Nome utente</h3>
              <h5>Giorno e Data</h5>
              <p>Text</p>
            </li>
          </ul>
           </div>
      </div>
    </div>
    </>
  );
}

export default App;