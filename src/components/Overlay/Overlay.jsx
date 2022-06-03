import styles from "./Overlay.module.scss"

export default function Overlay ({functionOnClick = ()=>{}}) {
    return (
        <div onClick={()=>functionOnClick()} className={styles.Overlay}></div>
    )
}