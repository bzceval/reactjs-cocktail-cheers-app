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
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/places-drink" element={<PrivateRouter />}>
          <Route path="" element={<PlacesDrink />} />
        </Route>
        <Route path="/drinks" element={<PrivateRouter />}>
          <Route path="" element={<Drinks />} />
        </Route>
        <Route path="/drinks/:id" element={<PrivateRouter />}>
          <Route path="" element={<DrinkDetail />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
