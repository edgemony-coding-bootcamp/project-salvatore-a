import style from './MessageBlock.module.scss';
import { useSelector } from "react-redux";
import { Message } from '../Message';


export const MessageBlock = () => {
    const groups = useSelector(state => state.groups)

    return (
        <div className={style.messageBlock}>
            <h2>Nome </h2>
            <ul>
                {groups.map((group, index) => (
                    <Message key={index} data={group} />
                ))}
            </ul>
            <div className="input">
                <p>Scrivi qui il testo</p>
                <input type="textarea" />
            </div>
        </div>
    )

}
