import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "./AboutUs";

const Payment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("amount", product.product_cost);
      formData.append("phone", phone);

      const response = await axios.post(
        "https://smile05.pythonanywhere.com/api/mpesa_payment",
        formData
      );
      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="row justify-content-center mt-2">
      <h1 className="m-2">Make Mpesa payment- LIPA NA MPESA</h1>

      <div className="shadow card col-md-6 p-2">
        <h1 className="text-success">LIPA NA MPESA</h1>
        <h3 className="text-secondary">{product.product_name}</h3>
        <p className="text-danger"> Ksh{product.product_cost}</p>

        {loading}
        {success}
        {error}

        <form action="" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter 254**********"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit" className="btn btn-outline-success btn-sm">
            Purchase
          </button>
        </form>
      </div>
      <hr />
      <AboutUs/>
    </div>
  );
};

export default Payment;
