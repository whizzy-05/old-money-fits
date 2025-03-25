import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";

const Signin = () => {
  //creating hooks so that we can set variables and use the usestate to send data btn frontend & backend.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //feedback system
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //posting data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("connecting...");
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://smile05.pythonanywhere.com/api/signin",
        formData
      );

      if (response.data.user) {
        setLoading("");
        console.log("Res" + response.data.message);
        navigate("/");
      } else {
        setSuccess(response.data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Signin Form</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />{" "}
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
            Sign in
          </button>
          <br />
          <p>
            Dont have an account?<Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
      <AboutUs />
    </div>
  );
};

export default Signin;
