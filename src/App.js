
import React, { useState } from "react";

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullname, setFullname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstname == "" || lastname === "") alert("Fill");
    else setFullname(`${firstname} ${lastname}`);
  };
  const isFormValid = firstname.trim() !== "" && lastname.trim() !== "";
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
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
        <br />
        <p>Full Name: {fullname}</p>
      </form>
    </div>
  );
}
