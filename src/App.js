// src/App.js
import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import AuthService from "./services/auth.Services";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is already authenticated on page load
    const token = localStorage.getItem("token");
    if (token) {
      // You might want to make a backend call to validate the token
      setUser({ id: 1, email: "user@example.com", token });
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleRegister = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <Home user={user} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} onRegister={handleRegister} />
      )}
    </div>
  );
}

export default App;
