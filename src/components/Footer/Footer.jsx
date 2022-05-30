import styles from "./Footer.module.scss";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";

export default function Footer() {
    return (
      <div className={styles.Footer}>
        <div className={styles.Footer__Wrapper}>
        <div className={styles.Footer__IconsWrapper}>
          <ImFacebook/>
          <BsInstagram/>
          <ImTwitter/>
          <ImYoutube/>
        </div>
        <div className={styles.Footer__ColumnWrapper}>
        <ul className={styles.Footer__column}>
            <li><a>Audio e sottotitoli</a></li>
            <li><a>Media Center</a></li>
            <li><a>Privacy</a></li>
            <li><a>Contattaci</a></li>
        </ul>
        <ul className={styles.Footer__column}>
            <li><a>Audiodescrizione</a></li>
            <li><a>Rapporti con gli investitori</a></li>
            <li><a>Note legali</a></li>
        </ul>
        <ul className={styles.Footer__column}>
            <li><a>Centro assistenza</a></li>
            <li><a>Opportunità di lavoro</a></li>
            <li><a>Preferenze per i cookie</a></li>
        </ul>
        <ul className={styles.Footer__column}>
            <li><a>Carte regalo</a></li>
            <li><a>Condizioni di utilizzo</a></li>
            <li><a>Informazioni sull'azienda</a></li>
        </ul>
        </div>
        <button className={styles.Footer__button}>Codice di servizio</button>
        <p className={styles.Footer__authors}>Credits by 
          <a> Ester </a> 
          <a>Giulio </a> 
          <a>Carmelo </a>  
          <a>Alessia </a>  
          <a>Paolo</a>
        </p>
  
      </div>
      </div>
    );
  };