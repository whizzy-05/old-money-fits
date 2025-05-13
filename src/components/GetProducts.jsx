import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext"; // Import CartContext
import "bootstrap/dist/js/bootstrap.min.js";
import AboutUs from "./AboutUs";
import Carousel from "./Carousel";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const img_url = "https://smile05.pythonanywhere.com/static/images/";
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Access the addToCart function

  // Fetch products from API
  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://smile05.pythonanywhere.com/api/get_product_details"
      );
      setProducts(response.data.products); // Set fetched products to state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid row">
      <h1 className="text-center mt-4 vintage-heading">Explore Outfits</h1>

      {/* Carousel Section */}
      <Carousel />

      {/* Search Input */}
      <div className="col-12 my-4">
        <input
          type="text"
          className="form-control mb-3 vintage-search-input"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtered Products */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card vintage-card shadow p-3 d-flex flex-column justify-content-between">
                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  className="card-img-top vintage-card-img"
                />
                <div className="card-body vintage-card-body d-flex flex-column justify-content-between">
                  <h5 className="mt-2 vintage-product-title">{product.product_name}</h5>
                  <p className="text-muted vintage-product-description">
                    {product.product_description}
                  </p>
                  <b className="text-warning vintage-price">Ksh {product.product_cost}</b>
                  <div className="d-flex justify-content-between mt-3">
                    {/* Add to Cart Button */}
                    <button
                      className="btn btn-outline-success btn-sm vintage-button"
                      onClick={() => addToCart(product)} // Add product to cart
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm vintage-button"
                      onClick={() => {
                        navigate("/payment", { state: { product } }); // Navigate to payment page
                      }}
                    >
                      Show details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <p className="text-muted">No products found matching your search.</p>
          </div>
        )}
      </div>

      {/* About Us Section */}
      <hr />
      <AboutUs />
    </div>
  );
};

export default GetProducts;