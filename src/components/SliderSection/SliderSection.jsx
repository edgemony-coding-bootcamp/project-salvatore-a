import styles from "./SliderSection.module.scss";

import { useEffect, useState } from "react";

import { FaSmileWink } from "react-icons/fa";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function SliderSection({ moviesData, title, toggleModal }) {
  const handleDragStart = (e) => e.preventDefault();

  const images = moviesData.map((el) => (
    <img
    onClick={() => {toggleModal(el)}}
      src={el.poster}
      alt={el.title}
      key={el.id}
      onDragStart={handleDragStart}
      role="presentation"
    ></img>
  )); 

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  
  return (
    <div className={styles.SliderSection}>
      <h1 className={styles.SliderSection__Title}>{title}</h1>
      {moviesData.length ? (
        <div className={styles.SliderSection__Slider}>
          
          <AliceCarousel
            mouseTracking={window.innerWidth > 770 ? false :screenWidth}
            items={images}
            infinite={false}
            autoHeight={true}
            autoWidth={true}
            disableButtonsControls={window.innerWidth > 770 ? false :screenWidth}
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
            renderPrevButton={() => {
              return <span className={styles.SliderSection__Left}> <MdOutlineArrowBackIosNew /> </span>
            }}
            renderNextButton={() => {
              return <span className={styles.SliderSection__Right}> <MdOutlineArrowForwardIos /> </span>
            }}
          />
           </div>
          
      ) : (
        <div className={styles.SliderSection__ListEmpty}>
          Whoooops, lista vuota... aggiungi qualcosa! <FaSmileWink />
        </div>
      )}
    </div>
  );
}
