import styles from "./ModalDetails.module.scss";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdAddCircleOutline, MdPlayCircleOutline } from 'react-icons/md'

export default function ModalDetails({ isVisible, movieData, toggleModal, togglePlayModal }) {
    // const context = useMovieContext

    return (
        <div >
            {isVisible && (
                <>
                    {console.log(movieData)}

                    <div className={styles.Overlay}> </div>
                    <div className={styles.ModalContainer}>
                        <IoIosCloseCircleOutline onClick={() => toggleModal()} className={styles.ModalContainer__BtnClose} />


                        <img className={styles.ModalContainer__Poster} src={movieData.poster} alt={movieData.title} />

                        <div className={styles.ModalData}>
                            <h1 className={styles.ModalData__Title}>{movieData.title}</h1>
                            <h3 className={styles.ModalData__Season}> Stagioni: {movieData.seasons} </h3>
                            <h3 className={styles.ModalData__Desc}>{movieData.description}</h3>
                            <h4 className={styles.ModalData__Genres}> Genere: {movieData.genres}</h4>
                            <h4 className={styles.ModalData__Cast}> Cast:{movieData.cast}</h4>
                            <MdAddCircleOutline onClick={() => { }} className={styles.ModalData__BtnCir} />
                            <MdPlayCircleOutline onClick={() => togglePlayModal()} className={styles.ModalData__BtnCir} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
