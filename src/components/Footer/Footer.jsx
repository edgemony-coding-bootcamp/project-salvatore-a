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
          <ImFacebook />
          <BsInstagram />
          <ImTwitter />
          <ImYoutube />
        </div>
        <div className={styles.Footer__ColumnWrapper}>
          <ul className={styles.Footer__column}>
            <li>Audio e sottotitoli</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contattaci</li>
          </ul>
          <ul className={styles.Footer__column}>
            <li>Audiodescrizione</li>
            <li>Rapporti con gli investitori</li>
            <li>Note legali</li>
          </ul>
          <ul className={styles.Footer__column}>
            <li>Centro assistenza</li>
            <li>Opportunità di lavoro</li>
            <li>Preferenze per i cookie</li>
          </ul>
          <ul className={styles.Footer__column}>
            <li>Carte regalo</li>
            <li>Condizioni di utilizzo</li>
            <li>Informazioni sull'azienda</li>
          </ul>
        </div>
        <button className={styles.Footer__button}>Codice di servizio</button>
        <p className={styles.Footer__authors}>
          Credits by Ester Giulio Carmelo Alessia Paolo
        </p>
      </div>
    </div>
  );
}
