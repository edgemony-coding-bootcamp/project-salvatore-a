import { Link } from "react-router-dom";
import style from "./GroupModals.module.scss";

const GroupModal = (props) => {
  return (
    <>
      <div className={style.title_div}>
        <h2 className={style.group_modal_title}>
          {" "}
          {`#${props.group.name.replace(/_/g, " ")}`}
        </h2>
      </div>
      <form
        onSubmit={(e) => props.handleChangeName(e)}
        className={style.main_group_form}
      >
        <label htmlFor="modify_input">Modifica Gruppo:</label>
        <input
          value={props.updateGroup.name}
          onChange={(e) =>
            props.setUpdateGroup({
              messages: props.group.messages,
              name: e.target.value.replace(/ /g, "_"),
            })
          }
          type="text"
          name="modify_input"
          id="modify_input"
        />
        <div className={style.button_div}>
          <button onClick={props.handleChangeName}>
            <Link to={`/home/${props.updateGroup.name}`}>Modifica</Link>
          </button>
          <button type="button" onClick={props.handleDeleteGroup}>
            <Link to={`/home`}>Elimina</Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default GroupModal;
