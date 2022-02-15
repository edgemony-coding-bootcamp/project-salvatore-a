import style from './ConversationBlock.module.scss'

import { Conversation } from '../Conversation'

export const ConversationBlock = () => {
 
    return (
        <div className={style.conversation}>
            
            <Conversation/>
        </div>
    )
}