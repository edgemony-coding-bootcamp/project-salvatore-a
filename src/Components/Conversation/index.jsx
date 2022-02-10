import { useDispatch, useSelector } from 'react-redux'
import { updateSelected } from '../../store/action'
import style from './Conversation.module.scss'



export const Conversation = () => {
    const dispatch = useDispatch()
    
    const groups = useSelector(store => store.groups)
    
    function handleClick(index){
        dispatch(updateSelected(index))
    }


    return (
        <div className={style.conversation}>
            <h2>Conversazioni</h2>        
            {groups.length > 0 ? groups.map((group, index) => <li onClick={()=>handleClick(index)} key={group.name}>{group.name}</li>) : <p>Nessun Gruppo</p>}
        </div>
    )
} 

