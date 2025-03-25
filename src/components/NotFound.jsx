import React from "react";
import { useNavigate } from "react-router-dom";
import download from "../components/images/images .png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div class="container">
      <div class="error-message">
        <h2>Oops! The page you’re looking for doesn’t exist.</h2>
        <p>
          It seems like the page you were trying to reach has either been moved
          or deleted.
        </p>
        <img src={download} alt="" className="error" />
        <br />
        <br />
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-secondary text-black"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
