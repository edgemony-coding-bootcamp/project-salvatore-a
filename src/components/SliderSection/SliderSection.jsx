import styles from "./SliderSection.module.scss";

import { FaSmileWink } from "react-icons/fa";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function SliderSection({ moviesData, title }) {
  const handleDragStart = (e) => e.preventDefault();

  const images = moviesData.map((el) => (
    <img
      src={el.poster}
      alt={el.title}
      key={el.id}
      onDragStart={handleDragStart}
      role="presentation"
    ></img>
  ));

  return (
    <div className={styles.SliderSection}>
      <h1 className={styles.SliderSection__Title}>{title}</h1>
      {moviesData.length ? (
        <div className={styles.SliderSection__Slider}>
          <AliceCarousel
            mouseTracking={true}
            items={images}
            infinite={true}
            autoHeight={true}
            autoWidth={true}
            disableButtonsControls={true}
            disableDotsControls={true}
            responsive={{
              0: {
                items: 2,
              },
              500:{
                items: 3,
              },
              1024: {
                items: 6,
              },
            }}
          />
        </div>
      ) : (
        <div>
          Aggiungi qualcosa alla tua lista! <FaSmileWink />
        </div>
      )}
    </div>
  );
}
