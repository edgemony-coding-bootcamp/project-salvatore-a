import { useState } from "react";
import styles from "./AccessForm.module.scss";

export default function AccessForm({sendData}) {
  const [values, setValues] = useState({});

  const onInputsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    sendData(values);
  };

  return (
    <form onSubmit={submitForm} className={styles.AccessForm}>
      <div className={styles.AccessForm__inputGroup}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={values.username || ""}
          name="username"
          onChange={onInputsChange}
          id="username"
        />
      </div>
      <div className={styles.AccessForm__inputGroup}>
        <label htmlFor="email">Email</label>
        <input
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
          type="password"
          value={values.password || ""}
          name="password"
          onChange={onInputsChange}
          id="password"
        />
      </div>
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
        <input
          type="submit"
          value="Sign In"
        />
      </div>
    </form>
  );
}
