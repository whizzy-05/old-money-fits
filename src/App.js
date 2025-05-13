import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddProducts from "./components/AddProducts";
import GetProducts from "./components/GetProducts";
import NotFound from "./components/NotFound";
import Payment from "./components/Payment";
import Company from "./components/Company";
import Chatbot from "./components/Chatbot";
import CartContent from "./components/cartContent"; // ✅ Import CartContent
import { CartProvider } from "./components/CartContext"; // ✅ Correct path

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import download from "../src/components/images/download (1).jpeg";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarcollapse"
              aria-controls="navbarcollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarcollapse">
              <div className="navbar-nav">
                <Link to="/signup" className="link1 nav-link active">Signup</Link>
                <Link to="/signin" className="link2 nav-link active">Signin</Link>
                <Link to="/getproducts" className="link4 nav-link active">Home</Link>
                <Link to="/addproducts" className="link3 nav-link active">Create Outfit</Link>
                <Link to="/company" className="link5 nav-link active">Company Info</Link>
                <Link to="/cartcontent" className="link6 nav-link active">Cart</Link>
                <Link to="/Chatbot" className="link7 nav-link active">Ask anything</Link>
                
              </div>
            </div>
          </nav>
          <header className="App-header">
            <img src={download} alt="logo" className="pic" />
            <h1 className="title">Vintage Gem Old Money Fits</h1>
          </header>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/getproducts" element={<GetProducts />} />
            <Route path="/" element={<GetProducts />} />
            <Route path="/company" element={<Company />} />
            <Route path="/cartcontent" element={<CartContent />} /> {/* ✅ Cart route */}
            <Route path="/Chatbot" element={<Chatbot />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;