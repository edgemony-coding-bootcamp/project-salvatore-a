import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Homepage = lazy(() => import("./pages/Homepage"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <div className={styles.App}>
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
            path="/project-salvatore-a/signin"
            element={
              <Suspense fallback={<></>}>
                <Signin />
              </Suspense>
            }
          ></Route>

          <Route
            path="/project-salvatore-a/signup"
            element={
              <Suspense fallback={<></>}>
                <Signup />
              </Suspense>
            }
          ></Route>
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
