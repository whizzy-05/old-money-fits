import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  //feedback system
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //fetching data
  //append used to add data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting...");
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      //posting the data(using axios)
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
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          {/**the username input */}
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
          {/**the email input */}
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
          {/**the phone input */}
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
          {/**the password input */}
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="btn btn-outline-secondary btn-sm ">
            Sign up
          </button>
          <br />
          <p>
            Already have an account?<Link to="/signin">Signin</Link>
          </p>
        </form>
      </div>
      <AboutUs/>
    </div>
  );
};

export default Signup;
