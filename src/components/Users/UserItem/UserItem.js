import styles from "./UserItem.module.css";

import Button from "../../UI/Button/Button";

const UserItem = (props) => {
  const deleteUserHandler = () => {
    props.onDeleteUser(props.user.id);
  };

  return (
    <li>
      <p>
        {props.user.username} ({props.user.age} years old)
      </p>
      <Button
        className={styles.btnDelete}
        type="button"
        onClick={deleteUserHandler}
      >
        Delete
      </Button>
    </li>
  );
};

export default UserItem;
