import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const id = e.target.id.value;

    const newUser = { name: name, email: email, id: id };

    const headers = {
      "Content-Type": "application/json",
    };

    console.log(newUser);

    const url = `http://localhost:5000/users`;

    axios
      .post(url, newUser, { headers })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  return (
    <div>
      {users.length}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" /> <br></br>
        <label htmlFor="id">Id:</label>
        <input type="number" name="id" /> <br></br>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>

      {users.map((user) => (
        <h2 key={user.id}>
          {" "}
          {user.id}: {user.name} - {user.email}
        </h2>
      ))}
    </div>
  );
};

export default Users;
