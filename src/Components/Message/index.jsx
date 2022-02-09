import style from './Message.module.scss'



export const Message = () => {
    return (
           <li className={style.message}>
              <h3>Nome utente</h3>
              <h5>Giorno e Data</h5>
              <p>Text1</p>
            </li>     

    )
}