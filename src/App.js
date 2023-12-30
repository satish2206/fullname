import React, { useState } from "react";
import * as ReactTooltip from "react-tooltip";



export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [showFirstNameTooltip, setShowFirstNameTooltip] = useState(false);
  const [showLastNameTooltip, setShowLastNameTooltip] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstname.trim() !== "" && lastname.trim() !== "") {
      const fullName = `${firstname} ${lastname}`;
      setFullName(fullName);
    } else {
      setFullName("");

      // Show tooltips for empty fields
      setShowFirstNameTooltip(firstname.trim() === "");
      setShowLastNameTooltip(lastname.trim() === "");
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setShowFirstNameTooltip(false); // Clear tooltip when user types
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setShowLastNameTooltip(false); // Clear tooltip when user types
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
            data-tip={showFirstNameTooltip && "Please fill out this field"}
            data-for="firstname-tooltip"
          />
        </label>
        <ReactTooltip
          id="firstname-tooltip"
          place="top"
          type="error"
          effect="solid"
        >
          {showFirstNameTooltip && "Please fill out this field"}
        </ReactTooltip>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={handleLastNameChange}
            data-tip={showLastNameTooltip && "Please fill out this field"}
            data-for="lastname-tooltip"
          />
        </label>
        <ReactTooltip
          id="lastname-tooltip"
          place="top"
          type="error"
          effect="solid"
        >
          {showLastNameTooltip && "Please fill out this field"}
        </ReactTooltip>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Full Name: {fullName}</p>
    </div>
  );
}
