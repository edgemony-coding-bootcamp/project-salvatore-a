import styles from "./Banner.module.scss";

const Banner = (props) => {
    let result = "";

    if (props.value === "red"){
        result = "Utente e/o Password errati";
    } if (props.value === "green"){
        result = "Modifica Riuscita"
    }
    return (
        <div className={styles.banner} style={{background: props.value}}>
            <p>{result}</p>
        </div>
    )
}

export default Banner;