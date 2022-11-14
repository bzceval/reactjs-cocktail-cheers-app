import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to="/" className="brand-name d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              Device Coffee
            </NavLink>
            <ul className="nav col-12 col-lg-auto mx-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/" className="nav-link px-3 text-secondary">Home</NavLink></li>
              <li><NavLink to="/places-drink" className="nav-link px-3 text-white">Places to Drink</NavLink></li>
              <li><NavLink to="/drinks" className="nav-link px-3 text-white">Drinks</NavLink></li>
            </ul> 
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar