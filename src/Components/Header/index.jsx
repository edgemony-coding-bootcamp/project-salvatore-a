import { useState } from 'react';
import { Searchbar } from "../Searchbar";
import { Profile } from '../Profile'
import style from "./Header.module.scss";
import { ModalMobile } from "../ModalMobile";
import logo from "./logo256.png"

export const Header = () => {
    const [hideGroup, setHideGroup] = useState(true);

    const toggleMenu = () => {
        setHideGroup(!hideGroup);
    };
    
    
    return (
        <>
            <div className={style.header}>
            <div className={style.mediaGroup}>
                <img src={logo} onClick={toggleMenu} alt="navbar"/>
                <ModalMobile  hideGroup={hideGroup} setHideGroup={()=>setHideGroup()}/>        
            </div>
                <div className={style.logo}>
                    <img src={logo}/>
                    <h2>Slack clone</h2>
                </div>
                <Searchbar/>
                <Profile/>

            </div>
        </>
    )
}


