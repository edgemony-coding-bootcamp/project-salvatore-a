import styles from "./Carousel.module.scss";

import { useEffect, useState } from "react";
import slideOne from '../../img/slide_1.jpg'
import slideTwo from '../../img/slide_2.jpg'
import slideThree from '../../img/slide_3.jpg'


let carouselData = [slideOne,slideTwo,slideThree];
const Carousel = () => {
  const [data, setData] = useState(carouselData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flaggerMinus, setFlaggerMinus] = useState(false);
  const [flaggerMax, setFlaggerMax] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < activeIndex) {
      const shifted = carouselData.splice(carouselData.length - 1, 1);
      carouselData.unshift(...shifted);

      setTimeout(() => {
        setFlaggerMinus(false);
      }, 500);
    } else if (newIndex > activeIndex) {
      setTimeout(() => {
        const shift = carouselData.shift();
        carouselData.push(shift);
        setFlaggerMax(false);
      }, 500);
    }

    setData(carouselData);

    setActiveIndex(newIndex);
  };
  useEffect(() => {
    
    setInterval(() => {
      if (!flaggerMax || flaggerMinus) {
        updateIndex(activeIndex + 1);
        setFlaggerMax(true);
        
      }
    }, 8000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <div >
      <div className={styles.carousel}>
        <div className={`${styles.inner}`} id="slider">
          {data.map((image, key) => {
            return (
              <div
                key={key}
                className={`${styles.slides} ${
                  flaggerMinus ? styles.movementMinus : ""
                } ${flaggerMax ? styles.movementMax : ""}`}
              >
                <img src={image} alt={`carousel.img`} />
              </div>
            );
          })}
        </div>
        <div className={styles.indicators}>
          
          
        </div>
      </div>
    </div>
  );
};

export default Carousel;
