import React, { useEffect, useState } from "react";
import pic from "../logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import AboutUs from "./AboutUs";
import Carousel from "./Carousel";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm,setSearchTerm]= useState('')
  const img_url = "https://smile05.pythonanywhere.com/static/images/";
  const navigate = useNavigate("");

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://smile05.pythonanywhere.com/api/get_product_details"
      );
      setProducts(response.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts=products.filter((product)=>
product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container-fluid row">
      <h1>Explore Outfits</h1>
     <Carousel/>
     <input 
     type="text"
     classname='form-control mb-3'
     placeholder="Search for a product..."
     value={searchTerm}
     onChange={(e)=>setSearchTerm(e.target.value)}
     />
    
      {filteredProducts?.map((product, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card shadow p-2">
            <img
              src={img_url + product.product_photo}
              alt={product.product_photo}
            />
            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-warning"> ksh{product.product_cost}</b> <br />
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => {
                  navigate("/payment", { state: { product } });
                }}
              >
                Show details
              </button>
            </div>
          </div>
        </div>
      ))}

      <AboutUs/>
    </div>
  );
};

export default GetProducts;
