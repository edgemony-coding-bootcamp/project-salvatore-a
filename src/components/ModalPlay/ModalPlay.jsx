import styles from "./ModalPlay.module.scss";
import stranger from "./../../../src/logo.png"

export default function ModalPlay({ isVisible, toggleModal }) {
    return (
        <div >
            {isVisible && (
                <>
                    <div className={styles.Overlay}> </div>
                    <div className={styles.ModalContainer}>
                        <img src={stranger} alt={'Edgeflix'} />
                        <h2 className={styles.ModalContainer__Title}>Al momento non è possibile  riprodurre questo titolo.Riprova più tardi, quando verremo assunti da Netflix </h2>
                        <h3 className={styles.ModalContainer__TitleTwo}>p.s. Se potete, metteteci una buona parola</h3>
                        <button onClick={() => toggleModal()} className={styles.ModalContainer__BtnClose}>  Torna a Edgeflix</button>
                    </div>
                </>
            )}
        </div>
    );
}
