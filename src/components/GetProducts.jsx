import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "bootstrap/dist/js/bootstrap.min.js";
import AboutUs from "./AboutUs";
import Carousel from "./Carousel";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const img_url = "https://smile05.pythonanywhere.com/static/images/";
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://smile05.pythonanywhere.com/api/get_product_details"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 vintage-heading">Explore Outfits</h1>

      <Carousel />

      <div className="mb-4">
        <input
          type="text"
          className="form-control vintage-search-input"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card h-100 d-flex flex-column vintage-card shadow-sm">
                {/* Image Section */}
                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  className="card-img-top vintage-card-img"
                  style={{
                    objectFit: "cover",        // Ensures the image covers the area of the container without distortion
                    height: "200px",           // You can adjust this to your preferred image height
                    width: "100%",             // Ensures the image takes full width of the container
                    borderRadius: "8px",       // Optional: for rounded corners if you like
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="vintage-product-title">{product.product_name}</h5>
                  <p className="text-muted vintage-product-description flex-grow-1">
                    {product.product_description}
                  </p>
                  <b className="text-warning vintage-price">Ksh {product.product_cost}</b>

                  {/* Stack buttons vertically with smaller size */}
                  <div className="mt-3">
                    <button
                      className="btn btn-outline-success btn-sm vintage-button w-100 mb-2"
                      onClick={() => addToCart(product)}
                      style={{
                        padding: "8px 16px",  // Adjust padding to make the button smaller
                        fontSize: "14px",      // Reduce font size for a more compact button
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm vintage-button w-100"
                      onClick={() =>
                        navigate("/payment", { state: { product } })
                      }
                      style={{
                        padding: "8px 16px",  // Adjust padding for the second button
                        fontSize: "14px",      // Adjust font size for consistency
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

      <hr />
      <AboutUs />
    </div>
  );
};

export default GetProducts;