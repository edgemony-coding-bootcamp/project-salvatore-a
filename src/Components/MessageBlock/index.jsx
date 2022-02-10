import style from './MessageBlock.module.scss';
import { useSelector } from "react-redux";
import { Message } from '../Message';



export const MessageBlock = () => {
    const index = useSelector(state => state.selected)
    const group = useSelector(store => store.groups[index])
    

    

    return (
        <div className={style.messageBlock}>
            <h2>{group.name || ""}</h2>
            <ul>
                {group.messages.map((message, index) => (
                  group.messages.length > 0 ? <Message key={index} data={message} /> : <h3>"nessun messaggio"</h3> 
                ))}
            </ul>
            <div className="input">
                <p>Scrivi qui il testo</p>
                <input type="textarea" />
            </div>
        </div>
    )

}
