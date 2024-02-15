import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

const Registration = (onRegistrationSuccess) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Please confirm your password";
    }
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://192.168.1.60:5000/signUp", {
          username,
          email,
          password,
          isAdmin
        });
        console.log("Registration successful!", response.data);
        onRegistrationSuccess();
      } catch (error) {
        console.error("Registration failed:", error.message);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="auth-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <span className="error">{errors.username}</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}

        <label>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />
          Register as Admin
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
