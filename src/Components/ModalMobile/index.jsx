import style from './ModalMobile.module.scss'

import { Conversation } from '../Conversation'
import { useRef } from 'react';

export const ModalMobile = (props) => {
    const sideBar = useRef();
    if(sideBar.current !== undefined){

      console.log(sideBar.current.offsetHeight)
    }
 
    return (
        <div ref = {sideBar} className={`${style.modalMobile} ${props.hideGroup === true  && style.hideGroups}`}>
            <Conversation offSet={sideBar.current} setHideGroup= {props.setHideGroup} component="modalMobile"/>
        </div>
    )
}