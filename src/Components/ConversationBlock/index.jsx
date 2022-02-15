import style from './ConversationBlock.module.scss'
import { Profile } from '../Profile'
import { Conversation } from '../Conversation'

export const ConversationBlock = () => {
 
    return (
        <div className={style.conversation}>
            <Profile />
            <Conversation/>
        </div>
    )
}