import axios from "axios";
import React, { useState } from "react";
import AboutUs from "./AboutUs";

const AddProducts = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("connecting...");
    try {
      //form data is an object that allows us to enter data in key value pair
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);
      const response = await axios.post(
        "https://smile05.pythonanywhere.com/api/add_product",
        formData
      );
      if (response.data.message) {
        setLoading("");
        setSuccess(response.data.message);
        setProductName("");
        setProductDescription("");
        setProductCost("");
        setProductPhoto("");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Add Outfit</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter product name"
            className="form-control"
            value={product_name}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <br />
          <textarea
            placeholder="Product description"
            className="form-control"
            value={product_description}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          ></textarea>
          <br />
          <input
            type="number"
            placeholder="Enter product cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => {
              setProductCost(e.target.value);
            }}
          />
          <br />
          <input
            type="file"
            placeholder="Choose Image"
            className="form-control"
            onChange={(e) => {
              setProductPhoto(e.target.files[0]);
            }}
          />
          <br />
          <button type="submit" className="btn btn-outline-secondary btn-sm ">
            Add Outfit
          </button>
        </form>
      </div>
      <AboutUs/>
    </div>
  );
};

export default AddProducts;
