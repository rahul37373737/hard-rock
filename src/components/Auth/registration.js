import React, { useState } from "react";
import axios from "axios";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contact, setContact] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    if (!contact.trim()) {
      errors.contact = "Contact number is required";
    } else if (contact.length !== 10) {
      errors.contact = "Contact number should be 10 digits long";
    }
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://192.168.1.115:8000/account/register/",
          {
            email,
            password,
            contact,
            isAdmin
          }
        );
        console.log("Registration successful!", response.data);
        navigate("/login");
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
        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        {errors.contact && <span className="error">{errors.contact}</span>}

        <div>
          <label>
            <input
              type="radio"
              value="admin"
              checked={isAdmin}
              onChange={() => setIsAdmin(true)}
            />
            Register as Admin
          </label>
          <label>
            <input
              type="radio"
              value="user"
              checked={!isAdmin}
              onChange={() => setIsAdmin(false)}
            />
            Register as User
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
