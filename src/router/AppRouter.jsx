import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrinkDetail from "../pages/DrinkDetail";
import Drinks from "../pages/Drinks";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PlacesDrink from "../pages/PlacesDrink";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/places-drink" element={<PlacesDrink />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<DrinkDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
