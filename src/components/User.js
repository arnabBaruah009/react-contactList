import { useState } from "react";
import styles from "../styles/user.module.css";

const User = ({ user, onDelete }) => {
  const [currUser, setCurrUser] = useState(user);
  const [name, setName] = useState(user.name);
  const [tel, setTel] = useState(user.phone);
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    if (update === false) {
      setUpdate(true);
      return;
    }

    const updatedUser = { ...currUser, name, phone: tel };
    setCurrUser(updatedUser);
    setUpdate(false);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div className={styles.userDiv}>
      <div className={styles.imgDiv}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
        </svg>
      </div>
      <div className={styles.userInfo}>
        {update ? (
          <input onChange={(e) => setName(e.target.value)} value={name}></input>
        ) : (
          <p className={styles.userName}>{currUser.name}</p>
        )}
        {update ? (
          <input onChange={(e) => setTel(e.target.value)} value={tel}></input>
        ) : (
          <p className={styles.userPhone}>{currUser.phone}</p>
        )}
        <div className={styles.btnDiv}>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default User;
