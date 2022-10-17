import Card from "../../UI/Card/Card";
import UserItem from "../UserItem/UserItem";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.usersList}>
      <ul>
        {props.users.map((user) => {
          return (
            <UserItem
              key={user.id}
              user={user}
              onDeleteUser={props.deleteUser}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
