import { Searchbar } from "../Searchbar";
import style from "./Header.module.scss";


export const Header = () => {

    return (
        <>
            <div className={style.header}>
                <Searchbar/>

            </div>
        </>
    )
}


