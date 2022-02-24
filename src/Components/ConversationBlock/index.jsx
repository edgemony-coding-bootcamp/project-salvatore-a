import style from './ConversationBlock.module.scss'

import { Conversation } from '../Conversation'

export const ConversationBlock = (props) => {
 
    return (
        <div className={style.conversation}>
            
            <Conversation  component="ConversationBlock"/>
        </div>
    )
}