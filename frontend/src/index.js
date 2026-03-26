import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./landingPage/about/About";
import SignUpPage from "./landingPage/signup/SignUpPage";
import Products from "./landingPage/products/Products";
import Pricing from "./landingPage/pricing/PricingPage";
import Support from "./landingPage/support/SupportPage";
import NavBar from './landingPage/home/Navbar';
import Footer from './landingPage/Footer';
import LoginPage from './landingPage/login/login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <NavBar></NavBar>
 <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/about" element={<About/>} />
    <Route path="/products" element={<Products />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/support" element={<Support />} />
 </Routes>
 <Footer/>
 </BrowserRouter>
);


