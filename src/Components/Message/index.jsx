import style from './Message.module.scss'
import ShowTime from "../ShowTime";

function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

export const Message = (props) => {
  const message = props.data
  const date = message.date || {seconds: 1644405843}
  
  
    return (
      
           <li className={style.message}>
              <div className={style.author}>
              <h3>{message.author}</h3>
              <ShowTime date={toDateTime(date.seconds)}/>
              </div>
              <p>{message.text}</p>
            </li>     

    )
}