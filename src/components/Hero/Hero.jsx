import { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi'
import styles from "./Hero.module.scss";
import VideoBg from './../../assets/StrangerT.mp4'
const strangerLogo = require('./../../assets/Stranger-Things-logo.webp');

export default function Hero({ toggleModal, toggleDetailsModal, movieData }) {
    const [isMuted, setIsMuted] = useState(true)


    return (
        < div className={styles.Hero}>

            <video className={styles.Hero__BackgrVid} src={VideoBg} autoPlay loop muted={isMuted} />

            <div className={styles.Hero__WrapOver}>
                {/* <h1 className={styles.Hero__Title} >Stranger Things </h1> */}
                <img className={styles.Hero__Title} src={strangerLogo} alt="Stranger Things" />
                <h3 className={styles.Hero__Desc}> {movieData && movieData.description} </h3>
                <div className={styles.Hero__BtnWrap}>
                    <button onClick={() => toggleModal()} className={styles.Hero__BtnPlay}> < BsFillPlayFill className={styles.Hero__BtnIcon} />  Riproduci</button>
                    <button onClick={() => toggleDetailsModal(movieData)} className={styles.Hero__BtnInfo}> < AiOutlineInfoCircle className={styles.Hero__BtnIcon} /> Altre info</button>


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