import React, { useState } from "react";
import "./auth.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://192.168.1.103:8000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      } else {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        console.log("suceessful");
        onLogin(data.isAdmin);
      }
    } catch (error) {
      setError("Invalid email or password", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Login;
