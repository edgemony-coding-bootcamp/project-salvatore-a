import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updateUrl, getMessageId } from '../../store/action'
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
            addGroup(newGroup.replace(/ /g,"_"));
            setNewGroup("");
            setIsClicked(!isClicked)
        }

    }
    useEffect(() => {
        upDateUrl(params.id)
        //
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]
    )

 
    const toggleActive = (i) => {
        setActive(i);
    };

    function GetMessageId(index) {
        dispatch(getMessageId(index));
      }


    return (
        <div className={style.conversation}>
           
            <p className={style.channelName}>Canali</p>
            <ul>
            {groups.length > 0 ? groups.map((group, i) =>
                <Link onClick={()=> GetMessageId(undefined)} to={`/home/${group.name}`} key={group.name} replace >
                    <li className={isActive === i ? style.active : null}  onClick={() => toggleActive(i)}>
                    <span>#</span>
                    <p>{group.name.replace(/_/g," ")}</p>
                    </li>
                </Link>)
                : <li>Nessun Gruppo</li>}
            </ul>


            <div className={style.newgroup__wrapper}>
                <button onClick={() => setIsClicked(!isClicked)}>{!isClicked ? "+" : "×"} </button>
                <input
                    className={`${style.addGroup} ${isClicked && style.hiddenAddGroup}`}
                    type="textarea"
                    value={newGroup}
                    onChange={(e) => setNewGroup(e.target.value)}
                    onKeyDown={handleInput}
                    placeholder="Premi Invio Per Confermare"
                />  <p>Aggiungi Gruppi</p>
            </div>
        </div>
    )
}

