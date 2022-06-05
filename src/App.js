import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Protected = lazy(() => import("./components/Protected"));

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<></>}>
              <Protected redirect="Signin"/>
            </Suspense>
          }
        ></Route>

        <Route
          path="/signin"
          element={
            <Suspense fallback={<></>}>
              <Protected redirect={"Signin"}/>
            </Suspense>
          }
        ></Route>

        <Route
          path="/signup"
          element={
            <Suspense fallback={<></>}>
              <Protected redirect={"Signup"} />
            </Suspense>
          }
        ></Route>

        <Route
          path="/browse"
          element={
            <Suspense fallback={<></>}>
              <Protected redirect={"Signin"}/>
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
