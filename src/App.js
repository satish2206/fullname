import React, { useState } from "react";


export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstname.trim() !== "" && lastname.trim() !== "") {
      const fullName = `${firstname} ${lastname}`;
      setFullName(fullName);
    } else {
      setFullName(""); // Clear the full name if fields are empty
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
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
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastname} onChange={handleLastNameChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Full Name: {fullName}</p>
    </div>
  );
}
