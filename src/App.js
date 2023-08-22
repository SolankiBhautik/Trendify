import React from "react";
import Navbar from "./comp/Navbar";
import Home from "./comp/Home";
import Footer from "./comp/Footer";
import Product from "./comp/Product";
import Cart from "./comp/Cart";
import Authentication from "./comp/Authentication";
import Shipping from "./comp/Shipping";
import Payment from "./comp/Payment";
import Thanks from "./comp/Thanks";
import About from "./comp/About";
import Profile from "./comp/Profile";
import Contectus from "./comp/Contect_us"; 
import Login from "./comp/login/Login"; 
import Register from "./comp/login/Register"; 

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contect_us" element={<Contectus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
};

export default App;
