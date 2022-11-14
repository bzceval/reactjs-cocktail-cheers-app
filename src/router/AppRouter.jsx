import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DrinkDetail from "../pages/DrinkDetail";
import Drinks from "../pages/Drinks";
import Home from "../pages/Home";
import PlacesDrink from "../pages/PlacesDrink";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/places-drink" element={<PlacesDrink />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<DrinkDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
