import { useState } from "react";
import styles from "./App.module.css";
import NewUser from "./components/Users/NewUser/NewUser";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const formSubmited = (user) => {
    setUserList((prevUserListState) => {
      return [
        {
          ...user,
          id: `u${prevUserListState.length + 1}`,
        },
        ...prevUserListState,
      ];
    });
  };

  const deleteUser = (id) => {
    setUserList((prevUserListState) => {
      return prevUserListState.filter((user) => {
        return user.id !== id;
      });
    });
  };

  return (
    <div className={styles.container}>
      <NewUser onFormSubmit={formSubmited} />
      {userList.length > 0 && (
        <UsersList users={userList} deleteUser={deleteUser} />
      )}
      {!userList.length > 0 && <p className={styles.noData}>No data found!</p>}
    </div>
  );
}

export default App;
