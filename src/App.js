import React, { useState } from "react";


const Tooltip = ({ show, message }) => {
  return show ? <div className="tooltip">{message}</div> : null;
};

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstname.trim() === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    if (lastname.trim() === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

    if (firstname.trim() !== "" && lastname.trim() !== "") {
      const fullName = `${firstname} ${lastname}`;
      setFullName(fullName); // Update state with full name
      console.log("Submitted:", fullName);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFullName(`${e.target.value} ${lastname}`);
    setFirstNameError(false); // Clear error when user types in the field
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setFullName(`${firstname} ${e.target.value}`);
    setLastNameError(false); // Clear error when user types in the field
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={handleFirstNameChange}
          />
          <Tooltip show={firstNameError} message="Please fill out the First Name field" />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={handleLastNameChange}
          />
          <Tooltip show={lastNameError} message="Please fill out the Last Name field" />
        </label>
        <br />
        <p>Full Name: {fullName}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
