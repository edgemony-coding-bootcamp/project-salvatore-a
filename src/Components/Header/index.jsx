import { Searchbar } from "../Searchbar";
import { Profile } from '../Profile'
import style from "./Header.module.scss";


export const Header = () => {

    return (
        <>
            <div className={style.header}>

                <Searchbar/>
                <Profile/>

            </div>
        </>
    )
}


