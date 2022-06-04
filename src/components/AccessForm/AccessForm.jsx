import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AccessForm.module.scss";

export default function AccessForm({ sendData, formType }) {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const onInputsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    navigate("/browse");
    sendData(values);
  };

  return (
    <form
      autoComplete="false"
      onSubmit={submitForm}
      className={styles.AccessForm}
    >
      {formType === "signup" ? (
        <>
          <div className={styles.AccessForm__inputGroup}>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="text"
              value={values.avatar || ""}
              name="avatar"
              onChange={onInputsChange}
              id="avatar"
            />
          </div>
          <div className={styles.AccessForm__inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              autoComplete="false"
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
          autoComplete="false"
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
