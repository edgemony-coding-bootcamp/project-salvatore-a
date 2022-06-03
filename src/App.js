import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className={styles.App}>
      {/* <Router> */}
        <Routes>
          <Route
            path="/project-salvatore-a/"
            element={
              <Suspense fallback={<></>}>
                <Homepage />
              </Suspense>
            }
          ></Route>

          <Route
            path="/project-salvatore-a/login"
            element={
              <Suspense fallback={<></>}>
                <Login />
              </Suspense>
            }
          ></Route>
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
