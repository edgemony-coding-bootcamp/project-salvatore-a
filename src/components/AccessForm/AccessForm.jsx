import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext/UserProvider";

import { MdArrowDropDown } from "react-icons/md";

import { avatars } from "./../../assets/avatars";

import styles from "./AccessForm.module.scss";

export default function AccessForm({ sendData, endPoint }) {
  const navigate = useNavigate();

  const { fetchAllUsers } = useUserContext();

  const accessPlans = ["Premium", "Basic", "Poor"];
  const [avatarSelection, setAvatarSelection] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [planSelection, setPlanSelection] = useState("");

  const [values, setValues] = useState(
    endPoint !== "login"
      ? {
          avatar: "https://cdn-icons-png.flaticon.com/512/843/843331.png?w=740",
        }
      : {}
  );

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
    fetchAccess(values, endPoint);
  };

  const fetchAccess = async (values, endPoint) => {
    try {
      const request = await fetch(
        `https://edgemony-backend.herokuapp.com/${endPoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const response = await request.json();
      console.log(request.status)
      if (request.status !== 200 && request.status !== 201) {
        throw new Error(response);
      } else {
        localStorage.setItem("JWT_accessToken", response.accessToken);
        localStorage.setItem("currentUser", response.user.id);
        navigate("/browse");
      }
    } catch (e) {
      alert(e);
    }
  };

  const chooseAvatar = (e) => {
    const id = e.target.id;
    setAvatarSelection(id);
    setValues((prev) => ({ ...prev, avatar: e.target.id }));
  };

  const choosePlan = (plan) => {
    setPlanSelection(plan);
    setValues((prev) => ({ ...prev, accessPlan: plan }));
  };

  return (
    <form
      autoComplete="false"
      onSubmit={submitForm}
      className={styles.AccessForm}
    >
      {endPoint === "users" ? (
        <>
          <div className={styles.AccessForm__AvatarsWrapper}>
            <small>Scegli il tuo avatar!</small>
            {avatars.map((avatar, index) => (
              <img
                id={avatar}
                className={avatarSelection === avatar ? styles.Selected : null}
                onClick={chooseAvatar}
                key={index}
                src={avatar}
                alt={`Avatar ${index}`}
              />
            ))}
          </div>

          <div className={styles.AccessForm__AccessPlans}>
            <span onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <small>Scegli il tuo piano di accesso!</small>
              <MdArrowDropDown />
            </span>
            <div className={isDropdownOpen ? styles.Visible : null}>
              {accessPlans.map((plan, index) => (
                <div
                  onClick={() => choosePlan(plan)}
                  className={planSelection === plan ? styles.Selected : null}
                  key={index}
                >
                  {plan}
                </div>
              ))}
            </div>
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
        {endPoint === "users" ? (
          <input type="submit" value="Sign Up" />
        ) : (
          <input type="submit" value="Sign In" />
        )}
      </div>
    </form>
  );
}
