import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updateUrl } from '../../store/action'
import { addGroup } from "../../libs/firebaseFunctions";
import { useEffect, useState } from "react";
import style from './Conversation.module.scss'



export const Conversation = () => {
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false)
    const [newGroup, setNewGroup] = useState("");
    const location = useLocation();
    const [isActive, setActive] = useState();


    const groups = useSelector(store => store.groups)


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
    useEffect(() => {
        upDateUrl(params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]
    )

 
    const toggleActive = (i) => {
        setActive(i);
    };

    return (
        <div className={style.conversation}>

            <h3>Conversazioni</h3>
            <ul>
            {groups.length > 0 ? groups.map((group, i) =>
                <Link to={`/home/${group.name}`} key={group.name} replace >
                    <li className={isActive === i ? style.active : null}  onClick={() => toggleActive(i)}>{group.name}
                    <button>🗑️</button>
                    </li>
                </Link>)
                : <li>Nessun Gruppo</li>}
            </ul>


            <div className={style.newgroup__wrapper}>
                <button onClick={() => setIsClicked(!isClicked)}>+</button>
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

