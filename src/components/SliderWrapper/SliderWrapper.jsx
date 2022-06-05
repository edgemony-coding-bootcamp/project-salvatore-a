import styles from "./SliderWrapper.module.scss";

import SliderSection from "../SliderSection";
import { useMovieContext } from "../../Context/MovieContext/MovieProvider";

export default function SliderWrapper({ toggleModal }) {
  const actualUserID = localStorage.getItem("currentUser");
  const {movies} = useMovieContext();
  const userMovies = actualUserID === "admin" ? movies : movies.filter(movie=> movie.users.filter(id=>id===parseInt(actualUserID)).length>0);

  const newMovies = userMovies.filter((movie) => movie.new);
  const favoriteMovies = userMovies.filter(
    (movie) => movie.favorite
  );


  return (
    <div className={styles.SliderWrapper}>
      
      {userMovies &&
        <SliderSection toggleModal={toggleModal} moviesData={userMovies} title="Serie TV" />
      }
      {newMovies && (
        <SliderSection  toggleModal={toggleModal} moviesData={newMovies} title="Nuovi e popolari" />
      )}
      {favoriteMovies && (
        <SliderSection toggleModal={toggleModal} moviesData={favoriteMovies} title="La tua lista" />
      )}
    </div>
  );
}
