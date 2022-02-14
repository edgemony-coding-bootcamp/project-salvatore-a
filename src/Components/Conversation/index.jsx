import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updateSelected, updateUrl } from '../../store/action'
import { addGroup } from "../../libs/firebaseFunctions";
import { useEffect, useState } from "react";
import style from './Conversation.module.scss'



export const Conversation = ({flag}) => {
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false)
    const [newGroup, setNewGroup] = useState("");
 

    const groups = useSelector(store => store.groups)
    console.log(groups)
    // const url = useSelector(store => store.url)
    // const index = useSelector(store => store.selected)

    // function handleClick(index) {
    //     dispatch(updateSelected(index))
    // }


    function upDateUrl(url) {
        dispatch(updateUrl(url));
    }
    const params = useParams()
 

    function handleInput(e) {
        if (e.key === "Enter" || e.keyCode === "13") {
          addGroup(newGroup);
          setNewGroup("");
          setIsClicked(!isClicked)
        }
        
    }
    const location = useLocation()
    useEffect (()=>{
        upDateUrl(params.id)
        console.log(location)
    }, [location]
    )

    return (
        <div className={style.conversation}>
            <h2>Conversazioni</h2>
            
            {groups.length > 0 ? groups.map((group, index) =>
            <Link to={`/home/${group.name}`} key={group.name} replace>
                <li>{group.name}</li>
            </Link>) 
            : <p>Nessun Gruppo</p>}
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

