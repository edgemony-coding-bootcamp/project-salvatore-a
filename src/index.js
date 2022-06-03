import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MovieContextProvider from "./Context/MovieContext/MovieProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieContextProvider>
  </React.StrictMode>
);

reportWebVitals();
