import styles from "./SliderWrapper.module.scss";

import SliderSection from "../SliderSection";
import { useMovieContext } from "../../Context/MovieContext/MovieProvider";

export default function SliderWrapper({ toggleModal }) {
  const { movies } = useMovieContext();
  const newMovies = useMovieContext().movies.filter((movie) => movie.new);
  const favoriteMovies = useMovieContext().movies.filter(
    (movie) => movie.favorite
  );


  return (
    <div className={styles.SliderWrapper}>
      
      {movies &&
        <SliderSection toggleModal={toggleModal} moviesData={movies} title="Serie TV" />
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
