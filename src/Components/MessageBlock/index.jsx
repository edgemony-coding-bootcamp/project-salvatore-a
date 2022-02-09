import style from './MessageBlock.module.scss';
import { Message } from '../Message';


export const MessageBlock = () => {

    return (
        <div className={style.messageBlock}>
            <h2>Nome </h2>
            <ul>
                <Message></Message>
            </ul>
            <div className="input">
                <p>Scrivi qui il testo</p>
                <input type="textarea" />
            </div>
        </div>
    )

}
