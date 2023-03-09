import React, { useState } from "react";
import { registerAccount } from "../apiAdapters";

const Register = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [name, setName] = useState("");
  let [location, setLocation] = useState("");

  async function makeProfile(username, password, name, location) {
    try {
      const result = await registerAccount(username, password, name, location);
      console.log(result)
      localStorage.setItem("token", result.token);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setLocation("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (password !== confirmPassword) {
            alert("Passwords don't match");
          } else {
            makeProfile(username, password, name, location);
          }
        }}
      >
        <h1>Username</h1>
        <input
          name="username"
          type="text"
          value={username}
          minLength="6"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <h1>Password</h1>
        <input
          name="password"
          type="text"
          value={password}
          minLength="8"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <h1>Confirm Password</h1>
        <input
          name="password"
          type="text"
          value={confirmPassword}
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <h1>Name</h1>
        <input
          name="name"
          type="text"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h1>Location</h1>
        <input
          name="location"
          type="text"
          value={location}
          required
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Register;
