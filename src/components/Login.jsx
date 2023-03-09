import React, {useState} from "react";
import { loginAccount } from "../apiAdapters";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function sendLoginToDatabase(username, password) {
        try {
            const result = await loginAccount(username, password);
            localStorage.setItem("token", result.token);
            setUsername("");
            setPassword("")
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Log In</h1>
            <form
        onSubmit={(e) => {
          e.preventDefault();
          sendLoginToDatabase(username, password);
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
        <button type="submit">LOG IN</button>
      </form>
        </div>
    )
}

export default Login;

