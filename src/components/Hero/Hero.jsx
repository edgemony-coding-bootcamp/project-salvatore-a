// import { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
// import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi'
// import ReactPlayer from 'react-player'
import styles from "./Hero.module.scss";
const strangerImage = require('./../../assets/hero-stranger.webp');
const strangerLogo = require('./../../assets/Stranger-Things-logo.webp');

export default function Hero({ toggleModal, toggleDetailsModal, movieData }) {
    // const [isMuted, setIsMuted] = useState(true)


    return (
        < div className={styles.Hero}>
            {/* <div className={styles.Hero__ContVideo}> */}
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
            {/* </div> */}
            <div className={styles.Hero__WrapOver}>
                {/* <h1 className={styles.Hero__Title} >Stranger Things </h1> */}
                <img className={styles.Hero__Title} src={strangerLogo} alt="Stranger Things" />
                <h3 className={styles.Hero__Desc}> {movieData && movieData.description} </h3>
                <div className={styles.Hero__BtnWrap}>
                    <button onClick={() => toggleModal()} className={styles.Hero__BtnPlay}> < BsFillPlayFill className={styles.Hero__BtnIcon} />  Riproduci</button>
                    <button onClick={() => toggleDetailsModal(movieData)} className={styles.Hero__BtnInfo}> < AiOutlineInfoCircle className={styles.Hero__BtnIcon} /> Altre info</button>


                </div>
                {/* {isMuted ? (
                    <BiVolumeMute className={styles.Hero__BtnMute}
                        onClick={() => setIsMuted(false)} />) : (
                    <BiVolumeFull className={styles.Hero__BtnMute}
                        onClick={() => setIsMuted(true)} />

                )
                } */}
            </div>
        </div >
    );
};