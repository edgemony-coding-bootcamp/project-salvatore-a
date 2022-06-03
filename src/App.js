import styles from "./App.module.scss";
import {HashRouter, Routes, Route} from "react-router-dom"
import {lazy, Suspense} from "react";

function App() {
  const Homepage = lazy(() => import("./pages/Homepage"));

  return (
    <div className={styles.App}>
      <HashRouter>
        <Routes>
          <Route index element={<Suspense>
            <Homepage/>
          </Suspense>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
