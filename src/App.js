import React, { useState } from "react";

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullname, setFullname] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstname.trim() === "") {
      setFirstNameError("Please fill out the First Name field");
    } else {
      setFirstNameError("");
    }

    if (lastname.trim() === "") {
      setLastNameError("Please fill out the Last Name field");
    } else {
      setLastNameError("");
    }

    if (firstname.trim() !== "" && lastname.trim() !== "") {
      const fullName = `${firstname} ${lastname}`;
      setFullname(fullName); // Update state with full name
      console.log("Submitted:", fullName);
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        {firstNameError && <p style={{ color: "red" }}>{firstNameError}</p>}
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        {lastNameError && <p style={{ color: "red" }}>{lastNameError}</p>}
        <button type="submit">Submit</button>
        <br />
        <p>Full Name: {fullname}</p>
      </form>
    </div>
  );
}
