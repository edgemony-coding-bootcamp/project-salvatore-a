import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext/UserProvider";
import { avatars } from "./../../assets/avatars";
import styles from "./AccessForm.module.scss";

export default function AccessForm({ sendData, formType }) {
  const [values, setValues] = useState({
    avatar: "https://cdn-icons-png.flaticon.com/512/843/843331.png?w=740",
  });
  const navigate = useNavigate();

  const { users, fetchAllUsers } = useUserContext();

  useEffect(() => {
    fetchAllUsers();
    //eslint-disable-next-line
  }, []);

  const onInputsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetchAccess(values, formType);
  };

  const fetchAccess = async (values, requestType) => {
    if (requestType === "signup") {
      try {
        const request = await fetch(
          "https://edgemony-backend.herokuapp.com/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const response = await request.json();
        if (request.status !== 201) {
          throw new Error(response);
        } else {
          localStorage.setItem("JWT_accessToken", response.accessToken);
          localStorage.setItem("currentUser", response.user.id);
          navigate("/browse");
        }
      } catch (e) {
        alert(e);
      }
    } else {
      const emailVerification = users.filter(
        (user) => user.email === values.email
      );
      if (emailVerification.length) {
        localStorage.setItem("currentUser", emailVerification[0].id);
        navigate("/browse");
      } else {
        alert("Questa email non esiste, registrati!");
      }
    }
  };

  const [avatarSelection, setAvatarSelection] = useState("");

  const chooseAvatar = (e) => {
    const id = e.target.id;
    setAvatarSelection(id);
    setValues((prev)=> ({...prev, avatar: e.target.id}))
  };

  return (
    <form
      autoComplete="false"
      onSubmit={submitForm}
      className={styles.AccessForm}
    >
      {formType === "signup" ? (
        <>
          <div className={styles.AccessForm__AvatarsWrapper}>
            <small>Scegli il tuo avatar!</small>
            {avatars.map((avatar, index) => (
              <img
                id={avatar}
                className={avatarSelection === avatar ? (styles.Selected) : null}
                onClick={chooseAvatar}
                key={index}
                src={avatar}
                alt={`Avatar ${index}`}
              />
            ))}
          </div>
          <div className={styles.AccessForm__inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              required
              autoComplete="new-password"
              type="text"
              value={values.username || ""}
              name="username"
              onChange={onInputsChange}
              id="username"
            />
          </div>
        </>
      ) : null}
      <div className={styles.AccessForm__inputGroup}>
        <label htmlFor="email">Email</label>
        <input
          required
          autoComplete="new-password"
          type="email"
          value={values.email || ""}
          name="email"
          onChange={onInputsChange}
          id="email"
        />
      </div>
      <div className={styles.AccessForm__inputGroup}>
        <label htmlFor="password">Password</label>
        <input
          required
          autoComplete="new-password"
          type="password"
          value={values.password || ""}
          name="password"
          onChange={onInputsChange}
          id="password"
        />
      </div>
      <div className={styles.AccessForm__inputGroup}>
        {formType === "signup" ? (
          <input type="submit" value="Sign Up" />
        ) : (
          <input type="submit" value="Sign In" />
        )}
      </div>
    </form>
  );
}
