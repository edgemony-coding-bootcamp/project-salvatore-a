import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MovieContextProvider from "./Context/MovieContext/MovieProvider";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
