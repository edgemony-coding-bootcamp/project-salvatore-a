import styles from "./SliderWrapper.module.scss";

import SliderSection from "../SliderSection";
import { useMovieContext } from "../../Context/MovieContext/MovieProvider";
import { useEffect } from "react";

export default function SliderWrapper() {
  const { fetchAllMovies, movies } = useMovieContext();
  const newMovies = useMovieContext().movies.filter((movie) => movie.new);
  const favoriteMovies = useMovieContext().movies.filter(
    (movie) => movie.favorite
  );

  useEffect(() => {
    fetchAllMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.SliderWrapper}>
      {movies &&
      <SliderSection moviesData={movies} title="Serie TV"/>
      }
      {newMovies && (
        <SliderSection moviesData={newMovies} title="Nuovi e popolari" />
      )}
      {favoriteMovies && (
        <SliderSection moviesData={favoriteMovies} title="La tua lista" />
      )}
    </div>
  );
}
