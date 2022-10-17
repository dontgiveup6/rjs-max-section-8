import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });

      return;
    }

    props.onFormSubmit(userInput);
    setUserInput({ username: "", age: "" });
  };

  const userInputChangeHandler = (type, event) => {
    setUserInput((prevUserInputState) => {
      return {
        ...prevUserInputState,
        [type]: event.target.value,
      };
    });
  };

  const closeModal = () => {
    setError(undefined);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onCloseModal={closeModal}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <form onSubmit={formSubmitHandler}>
          <div className={`${styles["form-controls"]}`}>
            <div className={`${styles["form-control"]}`}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                placeholder="Enter username"
                value={userInput.username}
                type="text"
                onChange={userInputChangeHandler.bind(this, "username")}
              />
            </div>
            <div className={`${styles["form-control"]}`}>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                placeholder="Enter age"
                value={userInput.age}
                type="number"
                onChange={userInputChangeHandler.bind(this, "age")}
              />
            </div>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
