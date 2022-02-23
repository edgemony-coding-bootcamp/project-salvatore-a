import { Link } from 'react-router-dom';
import style from "./MessageBlockModals.module.scss";




const MessageBlockModals = (props) => {
  function handleChangeName(e) {
    e.preventDefault();
    let newMessages = props.group.messages.map(message => {
      let newMessage = {...message,message_group:props.updateGroup.name};
      return newMessage
    })
    
    props.patchGroups("name", props.group.name, {name:props.updateGroup.name,messages:newMessages});
    props.setModal(false);
    props.setGroup(props.updateGroup);
  }
  

  return (
    <div className={style.modalBackground}>
      <div className={style.groupModal}>
        <div className={style.head}>
          <h2>{`#${props.group.name.replace(/_/g, " ")}  ` || ""}</h2>
          <button className={style.closeButton} onClick={() => props.setModal(false)}>
            X
          </button>
        </div>
        <form onSubmit={(e) => handleChangeName(e)}>
          <label htmlFor="updateGroup">Cambia il Nome del Gruppo:</label>
          <input
            value={props.updateGroup.name}
            onChange={(e) =>
              props.setUpdateGroup({
                messages: props.group.messages,
                name: e.target.value.replace(/ /g, "_"),
              })
            }
            name="updateGroup"
            type="text"
          />
          <div className={style.buttonGroup}>
            <button onClick={handleChangeName} className={style.modifyButton}>
              <Link to={`/home/${props.updateGroup.name}`}>Modifica</Link>
            </button>
            <button onClick={() => { props.patchGroups("delete", props.group.name); props.setModal(false) }} className={style.deleteButton}>
              <Link to={`/home`}>Elimina</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MessageBlockModals