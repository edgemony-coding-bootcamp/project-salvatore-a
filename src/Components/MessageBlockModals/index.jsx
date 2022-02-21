import { Link } from 'react-router-dom';
import style from '../MessageBlock/MessageBlock.module.scss'


const MessageBlockModals = (props) => {
    function handleChangeName(e) {
        e.preventDefault();
        props.patchGroups("name", props.group.name, props.updateGroup);
        props.setModal(false);
        props.setGroup(props.updateGroup);    
      }


    return(
        <>
        <div className={props.modal ? style.groupModal : null}>
        <h2>{`#${props.group.name.replace(/_/g," ")}  ` || ""}</h2>
        <form onSubmit={(e) => handleChangeName(e)}>
          <label htmlFor="updateGroup">Cambia il Nome del Gruppo:</label>
          <input
            value={props.updateGroup.name}
            onChange={(e) =>
              props.setUpdateGroup({
                messages: props.group.messages,
                name: e.target.value.replace(/ /g,"_"),
              })
            }
            name="updateGroup"
            type="text"
          />
          <button onClick={handleChangeName} className={style.modifyButton}><Link to={`/home/${props.updateGroup.name}`}>Modifica</Link></button>
        </form>
        <div className={style.deleteGroup}>
          <p>Elimina Gruppo</p>
          <button onClick={()=> {props.patchGroups("delete",props.group.name);props.setModal(false)} } className={style.deleteButton}>
          <Link to={`/home`}>Elimina</Link>
          </button>
        </div>
        <button
          className={style.closeButton}
          onClick={() => props.setModal(false)}
        >
          Chiudi
        </button>
      </div>  
      </>
    )
}

export default MessageBlockModals