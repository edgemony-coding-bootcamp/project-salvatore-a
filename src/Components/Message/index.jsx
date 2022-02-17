import style from "./Message.module.scss";
import ShowTime from "../ShowTime";
import { useSelector } from "react-redux";
import { useState } from 'react';
import ProfileCard from "../ProfileCard";

function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

export const Message = (props) => {
  const message = props.data;
  const date = message.date || { seconds: 1644405843 };

  const users = useSelector((state) => state.users);
  const filteredUser = users.filter(x => x.id === message.author)
  const photo = filteredUser[0].photo || "https://img.icons8.com/pastel-glyph/64/000000/person-male--v1.png";

  const [showProfile,setShowProfile] = useState(false)    


  return (
    <>
      {showProfile && <ProfileCard show={showProfile} setShow={setShowProfile} user={filteredUser[0]} />}
      <li className={style.message}>
        <div className={style.author}>
          <img src={photo} alt={filteredUser[0].name} onClick={() => setShowProfile(!showProfile)} />
          <div className={style.nameText}>
            <div className={style.authorDate}>
              <h3>{filteredUser[0].name + " " + filteredUser[0].lastname}</h3>
              <ShowTime date={toDateTime(date.seconds)} />
            </div>
            <p>{message.text}</p>
          </div>

        </div>
      </li>
    </>
  );
};
