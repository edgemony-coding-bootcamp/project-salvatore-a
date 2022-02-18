import { useState } from 'react';
import { Searchbar } from "../Searchbar";
import { Profile } from '../Profile'
import style from "./Header.module.scss";
import { ModalMobile } from "../ModalMobile";
import image from "./ham.png"


export const Header = () => {
    const [hideGroup, setHideGroup] = useState(true);

    const toggleMenu = () => {
        setHideGroup(!hideGroup);
    };
    
    
    return (
        <>
            <div className={style.header}>
            <div className={style.mediaGroup}>
                <img src={image} onClick={toggleMenu} alt="navbar"/>
                <ModalMobile  hideGroup={hideGroup} setHideGroup={()=>setHideGroup()}/>
                
            </div>
                <Searchbar/>
                <Profile/>

            </div>
        </>
    )
}


