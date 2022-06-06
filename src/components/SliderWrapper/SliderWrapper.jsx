import styles from "./SliderWrapper.module.scss";

import SliderSection from "../SliderSection";

export default function SliderWrapper({ toggleModal, userMovies }) {

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
