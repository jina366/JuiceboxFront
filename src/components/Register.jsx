import React, { useState, useEffect } from "react";
import { registerAccount } from "../apiAdapters";


const Register = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [name, setName] = useState("")
  let [location, setLocation] = useState("");

async function makeProfile(username, password, name, location) {
    try {
        
    } catch (error) {
        
    }
}


}

export default Register