// src/services/authService.js
import axios from "axios";

const AuthService = {
  login: (email, password) => {
    return axios
      .post("http://localhost:3001/api/auth/login", { email, password })
      .then((response) => {
        const { id, email, token } = response.data;
        localStorage.setItem("token", token);
        return { id, email, token };
      });
  },
  register: (email, password, username) => {
    return axios
      .post("http://localhost:3001/api/auth/register", {
        email,
        password,
        username,
      })
      .then((response) => {
        const { id, email, token } = response.data;
        localStorage.setItem("token", token);
        return { id, email, token };
      });
  },
  logout: () => {
    localStorage.removeItem("token");
  },
};

export default AuthService;
