

import style from './ImageProfile.module.scss'

const ImageProfile = (props) =>{
    
   
   
    
    return(
        <>
            <div  className={`${props.mini && style.img_wrapper_mini}  ${style.img_wrapper}`}>
            <img onClick={()=> props.setTrigger(false)}  src={props.photo} alt="img Profile" loading="lazy" />
            <div className={props.logged ? style.status_green : style.status_grey}></div>
            </div>
        </>
    )
}

export default ImageProfile