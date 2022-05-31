import { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi'
// import ReactPlayer from 'react-player'
import styles from "./Hero.module.scss";
const strangerImage = new URL("https://pad.mymovies.it/filmclub/2016/06/082/coverlg_home.jpg");

export default function Hero({ toggleModal }) {
    const [isMuted, setIsMuted] = useState(true)

    return (
        < div className={styles.Hero}>
            <div className={styles.Hero__ContVideo}>
                <img className={styles.Hero__BackgrVid} src={strangerImage} alt="Stranger Things" />
                {/* <ReactPlayer
                    playing={true}
                    loop={true}
                    width='100vw'
                    height='100vh'
                    muted={isMuted}
                    controls={false}
                    title={false}
                    className={styles.Hero__BackgrVid}
                    volume={1}

                    url='https://vimeo.com/593786555'
                /> */}
            </div>
            <div className={styles.Hero__WrapOver}>
                <h1 className={styles.Hero__Title} >Stranger Things </h1>
                <h3 className={styles.Hero__Desc}> Sono passati sei mesi dalla battaglia di Starcourt, che ha portato terrore e distruzione a Hawkins. Mentre affrontano le conseguenze ... </h3>
                <div className={styles.Hero__BtnWrap}>
                    <button onClick={() => toggleModal()} className={styles.Hero__BtnPlay}> < BsFillPlayFill className={styles.Hero__BtnIcon} />  Riproduci</button>
                    <button className={styles.Hero__BtnInfo}> < AiOutlineInfoCircle className={styles.Hero__BtnIcon} /> Altre info</button>


                </div>
                {isMuted ? (
                    <BiVolumeMute className={styles.Hero__BtnMute}
                        onClick={() => setIsMuted(false)} />) : (
                    <BiVolumeFull className={styles.Hero__BtnMute}
                        onClick={() => setIsMuted(true)} />

                )
                }
            </div>
        </div >
    );
};