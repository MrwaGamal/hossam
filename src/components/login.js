// src/components/Login.js
import React, { useState } from "react";
import AuthService from "../services/auth.Services";

const Login = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    AuthService.login(email, password)
      .then((user) => {
        onLogin(user);
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  const handleRegister = () => {
    AuthService.register(email, password, username)
      .then((user) => {
        onRegister(user);
      })
      .catch((error) => {
        console.error("Registration failed", error);
      });
  };

  return (
    <div>
      <h2>Login or Register</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
