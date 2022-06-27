import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AllFoods from "../pages/allFoods/AllFoods";
import Checkout from "../pages/checkout/Checkout";
import Countact from "../pages/countact/Countact";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


const Routers = () => {
    return (
        <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/foods" element={<AllFoods />} />
            <Route path="/foods/:id" element={<FoodDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Countact />} />
            
        </Routes>
    );
};

export default Routers;