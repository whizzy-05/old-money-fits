import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddProducts from "./components/AddProducts";
import GetProducts from "./components/GetProducts";
import NotFound from "./components/NotFound";
import Payment from "./components/Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import download from "../src/components/images/download (1).jpeg";
import Company from "./components/Company";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav  className="nav" class="navbar navbar-expand-md">
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarcollapse">
            <div class="navbar-nav">
              <Link to="/signup" className="link1 nav-link active">
                signup
              </Link>
              <Link to="/signin" className="link2 nav-link active">
                signin
              </Link>
              <Link to="/addproducts" className="link3 nav-link active">
                Create Outfit
              </Link>
              <Link to="/getproducts" className="link4 nav-link active">
                Home
              </Link>
              <Link to="/company" className="link5 nav-link active">
                Company Info
              </Link>
            </div>
          </div>
        </nav>

        <header className="App-header">
          <img src={download} alt="" className="pic" />
          <h1>Vintage Gem Old Money Fits </h1>
        </header>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/getproducts" element={<GetProducts />} />
          <Route path="/company" element={<Company />} />
          <Route path="/" element={<GetProducts />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
