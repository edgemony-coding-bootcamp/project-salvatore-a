import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import MovieContextProvider from "./Context/MovieContext/MovieProvider";
import UserContextProvider from "./Context/UserContext/UserProvider";

import { HashRouter } from "react-router-dom";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <UserContextProvider>
        <MovieContextProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </MovieContextProvider>
      </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
