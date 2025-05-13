import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  // feedback system
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Function to generate a strong password
  const generateStrongPassword = () => {
    const length = 12; // length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?"; // characters allowed
    let password = "";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    setPassword(password); // Set the generated password in state
  };

  // Fetching data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      // Posting the data (using axios)
      const response = await axios.post(
        "https://smile05.pythonanywhere.com/api/signup",
        formData
      );
      setLoading("");
      setSuccess(response.data.success);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Signup Form</h1>
        {loading && <div>{loading}</div>}
        {success && <div>{success}</div>}
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          {/** the username input */}
          <input
            type="text"
            placeholder="Enter username"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          {/** the email input */}
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {/** the phone input */}
          <input
            type="tel"
            placeholder="Enter phone number"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          {/** the password input */}
          <div className="password-field position-relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Enter password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-link position-absolute"
              style={{ top: "50%", right: "10px", transform: "translateY(-50%)" }}
              onClick={() => setShowPassword(!showPassword)} // Toggle the password visibility state
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <br />
          {/** Button to generate a strong password */}
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm mb-3"
            onClick={generateStrongPassword}
          >
            Generate Strong Password
          </button>
          <br />
          <button type="submit" className="btn btn-outline-secondary btn-sm">
            Sign up
          </button>
          <br />
          <p>
            Already have an account?<Link to="/signin">Signin</Link>
          </p>
        </form>
      </div>
      <hr />
      <AboutUs />
    </div>
  );
};

export default Signup;