import React, { useState, useRef } from "react";
// import Wrapper from "../../Helpers/Wrapper";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });

      return;
    }

    const userInput = { username: enteredName, age: enteredAge };
    props.onFormSubmit(userInput);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const closeModal = () => {
    setError(undefined);
  };

  return (
    <React.Fragment>
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
                ref={nameInputRef}
                type="text"
              />
            </div>
            <div className={`${styles["form-control"]}`}>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                placeholder="Enter age"
                ref={ageInputRef}
                type="number"
              />
            </div>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default NewUser;
