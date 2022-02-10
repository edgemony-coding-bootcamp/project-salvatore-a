import { useDispatch, useSelector } from 'react-redux'
import { updateSelected } from '../../store/action'
import { addGroup } from "../../libs/firebaseFunctions";
import { useState } from "react";
import style from './Conversation.module.scss'



export const Conversation = () => {
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false)
    const [newGroup, setNewGroup] = useState("");

    const groups = useSelector(store => store.groups)

    function handleClick(index) {
        dispatch(updateSelected(index))
    }

    function handleInput(e) {
        if (e.key === "Enter" || e.keyCode === "13") {
          addGroup(newGroup);
          setNewGroup("");
          setIsClicked(!isClicked)
        }
      }


    return (
        <div className={style.conversation}>
            <h2>Conversazioni</h2>
            {groups.length > 0 ? groups.map((group, index) => <li onClick={() => handleClick(index)} key={group.name}>{group.name}</li>) : <p>Nessun Gruppo</p>}
            <div className={style.newgroup__wrapper}>
                <div onClick={()=> setIsClicked(!isClicked)}>+</div>
                {isClicked ? <input
                    type="textarea"
                    value={newGroup}
                    onChange={(e) => setNewGroup(e.target.value)}
                    onKeyDown={handleInput}
                /> : <p>Aggiungi Gruppi</p>}
            </div>
        </div>
    )
}

