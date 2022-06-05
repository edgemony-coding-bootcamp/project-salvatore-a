import styles from "./Overlay.module.scss"

export default function Overlay ({functionOnClick = ()=>{}, visibility=true}) {
    return (
        <div onClick={()=>functionOnClick()} className={visibility ? styles.Overlay : styles.OverlayNotVisible}></div>
    )
}