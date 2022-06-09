import styles from "./ModalPlay.module.scss";
import stranger from "./../../../src/logo.png";
import Overlay from "../Overlay";
import {UseGlobalContext} from "../../Context/globalContext";

export default function ModalPlay({ toggleModal }) {
  const {state : {isVisible}} = UseGlobalContext();
  return (
    <div>
      {isVisible && (
        <>
          <Overlay functionOnClick={toggleModal} />
          <div className={styles.ModalContainer}>
            <img src={stranger} alt={"Edgeflix"} />
            <h2 className={styles.ModalContainer__Title}>
              Al momento non è possibile riprodurre questo titolo.
              <br/>
              Riprova più tardi, quando verremo assunti da Netflix{" "}
            </h2>
            <h3 className={styles.ModalContainer__TitleTwo}>
              p.s. Se potete, metteteci una buona parola
            </h3>
            <button
              onClick={() => toggleModal()}
              className={styles.ModalContainer__BtnClose}
            >
              {" "}
              Torna a Edgeflix
            </button>
          </div>
        </>
      )}
    </div>
  );
}
